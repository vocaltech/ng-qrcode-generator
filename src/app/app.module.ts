import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { QRCodeModule as QRCodeModule0 } from 'angular2-qrcode';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    QRCodeModule0,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
