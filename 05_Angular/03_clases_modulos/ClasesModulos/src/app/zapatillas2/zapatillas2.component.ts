import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas2',
  templateUrl: './zapatillas2.component.html',
  styleUrls: ['./zapatillas2.component.css']
})
export class Zapatillas2Component implements OnInit {

  public zapatillas : Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('reebok clasic','reebok',3.033, 'rojo', true),
      new Zapatilla('reebok clasic','reebok',3.033, 'rojo', true),
      new Zapatilla('reebok clasic','reebok',3.033, 'rojo', true),
      new Zapatilla('reebok clasic','reebok',3.033, 'rojo', true)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
  }

}
