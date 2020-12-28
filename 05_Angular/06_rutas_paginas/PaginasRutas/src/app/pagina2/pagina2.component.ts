import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  public nombre : string;
  public apellidos : string;
  public seguidores : number;

  constructor(
    private _route : ActivatedRoute,
    private _router : Router 
  ) {  
    this.apellidos = "";
    this.nombre = "";
    this.seguidores = NaN;
  }

  ngOnInit(): void {

    this._route.params.subscribe(( params: Params ) => {
      console.log(params);
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
      this.seguidores = Number(params.seguidores) + 1000;

    } )
  }

  redireccion(){
    this._router.navigate(['/pagina3']);
  }

}
