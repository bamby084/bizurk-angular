import { inject, Injectable, signal } from "@angular/core";
import { AuthStore } from "./features/auth/stores/auth.store";

@Injectable({
  providedIn: 'root'
})
export class AppStore {
  readonly isAppInitialized = signal<boolean>(false);
  readonly isInitializing = signal<boolean>(false);
  readonly authStore = inject(AuthStore);
  
  async initialize() {
    this.isInitializing.set(true);
    await Promise.all([this.authStore.getUserInfo()]);
    this.isAppInitialized.set(true);
    this.isInitializing.set(false);
  }
}