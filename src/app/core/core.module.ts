import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  providers: [
    AuthService,
    ToastService
  ]
})
export class CoreModule { }
