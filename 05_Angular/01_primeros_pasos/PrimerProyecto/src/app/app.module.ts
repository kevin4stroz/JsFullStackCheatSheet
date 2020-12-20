import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
