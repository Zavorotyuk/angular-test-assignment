
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const HOME_ROUTER: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [

    ]
  }
]


export const homeRouter: ModuleWithProviders = RouterModule.forChild(HOME_ROUTER);
