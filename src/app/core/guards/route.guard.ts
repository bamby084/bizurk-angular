import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { AuthStore } from "../../features/auth/stores/auth.store";

export const routeGuard: CanMatchFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if(authStore.isAuthenticated()){
    return true;
  }

  return router.createUrlTree(['/auth/login']);
}