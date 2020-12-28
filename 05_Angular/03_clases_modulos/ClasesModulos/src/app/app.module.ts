import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { Zapatillas2Component } from './zapatillas2/zapatillas2.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapatillasComponent,
    Zapatillas2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


