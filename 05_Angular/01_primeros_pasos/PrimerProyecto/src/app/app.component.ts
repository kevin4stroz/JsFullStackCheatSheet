import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Cambiando desde el componente';
  public mostrarVideoG: boolean = true;

  ocultarVideoJuego(){
    if(this.mostrarVideoG){
      this.mostrarVideoG = false;
    }else{
      this.mostrarVideoG = true;
    }
  }
}
