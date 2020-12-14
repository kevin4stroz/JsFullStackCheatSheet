// clase public
class Clases{
    // propiedades
    public color : string = "defecto" ;
    public modelo : string = "defecto" ;
    public marca : string = "defecto";
    public talla : string = "defecto";
    public precio : number = 0.0;

    // metodos

}

var camiseta = new Clases();

console.log(camiseta);

camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.marca = "nike";
camiseta.talla = "L";
camiseta.precio = 10.0;

console.log(camiseta);

// clase private
class Clase2{
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

var objeto2 = new Clase2('rojo', 'manga corta', 'nike','L', 20.0);

objeto2.setColor("azul");
console.log(objeto2.getColor());
console.log(objeto2);


// Interfaces : es un contrato en el que se defienen que propiedades
// y que metodos va a tener una clase, para que un software sea muy robosto

interface CamisetaBase{
    setColor(color);
    getColor();
}

// clase private
class Clase3 implements CamisetaBase{
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

// herencia

class Hija extends Clase2{
    public capucha : boolean = true;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var hijaObj = new Hija('w','w','w','w',11);
console.log(hijaObj);

// decoradores : patron de desiño que nos permite mediente
// unos metados que se le definen a una clase, hacer una copia
// a esa clase, y que en funcion a los parametros que recibe esa clase
// realice una o otra accion
// un decorador lo que hace es agregar una funcionabilidad a una clase

function estampar(logo: string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de :" +logo);
        }
    }
}

@estampar('Nike')
class Nueva{
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

var Deco = new Nueva('s','s','s','s',44);
Deco.estampacion();
