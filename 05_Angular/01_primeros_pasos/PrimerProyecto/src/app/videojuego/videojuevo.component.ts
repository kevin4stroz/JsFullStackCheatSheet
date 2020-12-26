import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector : 'videojuego',
    templateUrl : './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        console.log("Se a cargado el componente");

        this.titulo = "Interpolacion - Componente de videojuegos"
        this.listado = "Listdo de los juegos mas populares"
    }

    // ngOnInit : metodo quer se ejecuta una vez cargado el componente
    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    // ngDoCheck : este metodo se ejecuta una vez que haya un cambio 
    // en el componente o en la apliacacion de angular
    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "nuevo titulo del componente"
    }

    // ngOnDestroy : este metodo se ejecuta antes de eliminar la instancia de 
    // un componente
    ngOnDestroy(){
        console.log("OnDestroy ejecutado")
    }

    

}
