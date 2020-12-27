import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../models/configuracion';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public titulo : string;
  public descripcion : string;
  public config;
  
  constructor() {
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ngOnInit(): void {

  }

}
