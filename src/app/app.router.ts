import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
