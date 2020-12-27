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