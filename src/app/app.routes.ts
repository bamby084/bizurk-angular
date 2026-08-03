import { Routes } from '@angular/router';
import { routeGuard } from './core/guards/route.guard';

export const routes: Routes = [
  {
    path: "tabs",
    canMatch: [routeGuard],
    loadComponent: () => import("./layouts/tabs-layout/tabs.component")
      .then(m => m.TabsComponent),
    children: [
      {
        path: "home",
        loadComponent: () => import("./features/home/home.component")
          .then(m => m.HomeComponent)
      },
      {
        path: "currency",
        loadComponent: () => import("./features/currency/currency.component")
          .then(m => m.CurrencyComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./features/settings/settings.component")
          .then(m => m.SettingsComponent)
      },
    ]
  },
  {
    path: "auth",
    loadComponent: () => import("./layouts/auth-layout/auth-layout.component")
      .then(m => m.AuthLayoutComponent),
    children: [
      {
        path: "login",
        loadComponent: () => import("./features/auth/pages/login/login.component")
          .then(m => m.LoginComponent)
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/home",
    pathMatch: "full"
  }
];
