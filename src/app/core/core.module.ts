import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './auth-guard.service';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  providers: [
    AuthService,
    ToastService,
    AuthGuardService
  ]
})
export class CoreModule { }
