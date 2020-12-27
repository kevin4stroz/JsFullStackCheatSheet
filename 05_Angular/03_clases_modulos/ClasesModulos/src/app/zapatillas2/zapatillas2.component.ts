import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas2',
  templateUrl: './zapatillas2.component.html',
  styleUrls: ['./zapatillas2.component.css']
})
export class Zapatillas2Component implements OnInit {

  public zapatillas : Array<Zapatilla>;
  public marcas : Array<string>;
  public color : string;

  constructor() {
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('reebok clasic','reebok',70, 'rojo', true),
      new Zapatilla('addidas 1','addidas',40, 'rojo', true),
      new Zapatilla('nike2','nike',60, 'rojo', true),
      new Zapatilla('vans 1','vans',30, 'rojo', true),
      new Zapatilla('vans 3','vans',60, 'rojo', true),
      new Zapatilla('addidas 3','addidas',40, 'rojo', false)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.marcasRecorrer();
  }

  marcasRecorrer(){
    this.zapatillas.forEach((zapatilla) => {
      if(this.marcas.indexOf(zapatilla.marca) < 0 ){
        this.marcas.push(zapatilla.marca);
      }
    })

    console.log(this.marcas);
  } 

}
