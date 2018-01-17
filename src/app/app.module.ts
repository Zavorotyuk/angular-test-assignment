import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
