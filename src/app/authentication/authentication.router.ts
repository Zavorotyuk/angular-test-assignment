import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const AUTHENTICATION_ROUTER: Routes = [
  {
    path: '',
    redirectTo: 'signin'
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const authenticationRouter = RouterModule.forChild(AUTHENTICATION_ROUTER);
