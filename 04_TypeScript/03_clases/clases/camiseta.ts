interface CamisetaBase{
    setColor(color);
    getColor();
}
function estampar(logo: string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de :" +logo);
        }
    }
}

@estampar('Nike')
export class Camiseta{
    // propiedades
    private color : string = "defecto" ;
    private modelo : string = "defecto" ;
    private marca : string = "defecto";
    private talla : string = "defecto";
    private precio : number = 0.0;

    // metodos
    public getColor(){
        return this.color;
    }

    public setColor(color){
        this.color = color
    }

    // constructor
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

}