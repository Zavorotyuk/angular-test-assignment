import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/auth-guard.service';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [AuthGuard]
}
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
