import { Component } from '@angular/core'

@Component({
    selector : 'videojuego',
    templateUrl : './videojuego.component.html'
})
export class VideojuegoComponent{
    constructor(){
        console.log("Se a cargado el componente");
    }
}
