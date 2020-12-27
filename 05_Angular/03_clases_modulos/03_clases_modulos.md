[VOLVER AL INDICE](../../README.md)

# Clases

crear una clase y usarla en un componente

clase
```typescript
export var Configuracion = {
    'color' : 'red',
    'fondo' : 'cyan',
    'titulo' : 'Titulo desde una clase',
    'descripcion' : 'Aprendiendo angular'
}
```

componente
```typescript
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
```

vista
```typescript
<div [ngStyle]="{
    'background-color': config.fondo,
    'color': config.color
}">
    <h1>{{titulo}}</h1>
    <p>{{descripcion}}</p>

    <ul>
        <li>nike</li>
        <li>addidas</li>
        <li>rebook</li>
    </ul>
</div>
```

# Modelos

un modelo de datos es una clase,con una serie de propiedades que representa una entidad de datos.

modelo
```typescript
export class Zapatilla{
    public nombre : string;
    public marca : string;
    public precio : number;
    public color : string;
    public stock : boolean;

    constructor(nombre:string, marca:string, precio:number, color:string, stock:boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}
```

componente
```typescript
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
```

vista
```typescript
<div [ngStyle]="{
    'background-color' : '#eee',
    'border' : '5px solid red',
    'padding' : '20px'
}">


    <h1>Listado de zapatillas</h1>
    <ul>
        <li *ngFor = "let tennis of zapatillas">
            {{tennis.nombre}} - <strong>{{tennis.precio}}</strong>
        </li>
    </ul>
</div>
```

# ngFor

```html
<ul>
  <li *ngFor = "let tennis of zapatillas">
    {{tennis.nombre}} - <strong>{{tennis.precio}}</strong>
  </li>
</ul>
```
