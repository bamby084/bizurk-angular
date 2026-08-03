import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginRequest } from "../models/login.request";
import { Observable } from "rxjs";
import { LoginResponse } from "../models/login.response";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);

  login (request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'https://dummyjson.com/auth/login', 
      {
        username: request.username,
        password: request.password
      }, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(
      'https://dummyjson.com/auth/users/me', 
    );
  } 
}