import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authenticationRouter } from './authentication.router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    authenticationRouter
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthenticationModule { }
