import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ScreeningModule } from './screening/screening.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ScreeningModule,
    AppRoutingModule // important that this should be last
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
