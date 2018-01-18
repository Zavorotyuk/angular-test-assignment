import { NgModule } from '@angular/core';
import { authenticationRouter } from './authentication.router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    authenticationRouter
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthenticationModule { }
