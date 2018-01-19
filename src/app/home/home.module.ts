import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { homeRouter } from './home.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    homeRouter
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
