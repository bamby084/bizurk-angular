import { inject, Injectable, signal } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { firstValueFrom } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { User } from "../models/user";

const ACCESS_TOKEN_KEY = 'accessToken';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private readonly authService = inject(AuthService);
  readonly user = signal<User | null>(null);
  readonly isAuthenticated = signal<boolean>(false);
  readonly token = signal<string | null>(null);
  
  constructor() {
    this.useExistingTokenIfAvailable();
  }

  async login(username: string, password: string): Promise<void> {
    try{
      const response = await firstValueFrom(this.authService.login({username, password}));
      this.token.set(response.accessToken);
      this.isAuthenticated.set(true);
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
      
      await this.getUserInfo();      
    }catch(error){
      if(error instanceof HttpErrorResponse){
        throw new Error(error.error?.message || "Login failed. Please try again.");
      }

      throw new Error("An unexpected error occurred. Please try again.");
    }
  }

  async getUserInfo(): Promise<void> {
    try{
      const userInfo = await firstValueFrom(this.authService.getUserInfo());
      this.user.set(userInfo);
    }catch(error){
      // Handle error if needed, for now we can just log it
    }
  }

  async logout(): Promise<void> {
    this.token.set(null);
    this.isAuthenticated.set(false);
    this.user.set(null);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  getTokenExpireTime(token: string): number | null {
    try {
      const payload = token.split('.')[1];
      if(!payload){
        return null;
      }

      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const { exp } = JSON.parse(atob(base64)) as { exp?: number };

      return exp ? exp * 1000 : null;
    } catch (error) {
      return null;
    }
  }

  useExistingTokenIfAvailable() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if(!token){
      return;
    }

    const expireTime = this.getTokenExpireTime(token);
    if(!expireTime || expireTime <= Date.now()){
      return;
    }

    this.token.set(token);
    this.isAuthenticated.set(true);
  }
}