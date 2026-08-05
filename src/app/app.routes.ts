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
        loadComponent: () => import("./features/home/pages/home-page")
          .then(m => m.HomeComponent)
      },
      {
        path: "currency",
        loadComponent: () => import("./features/currency/pages/currency-page")
          .then(m => m.CurrencyComponent)
      },
      {
        path: "currency/:value",
        loadComponent: () => import("./features/currency/pages/currency-page")
          .then(m => m.CurrencyComponent)
      },
      {
        path: "analytic",
        loadComponent: () => import("./features/analytic/pages/analytic.page")
          .then(m => m.AnalyticPageComponent)
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
        loadComponent: () => import("./features/auth/pages/login")
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
