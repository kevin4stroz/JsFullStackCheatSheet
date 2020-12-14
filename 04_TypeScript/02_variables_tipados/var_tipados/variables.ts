// string
let cadena : string = "hola mundo";

// number
let edad : number = 26;

// booleano
let boolvar : boolean = true;

// Any
let varAny : any = 'hola';
varAny = false;

// Arrays
let arreglo : Array<string> = ['php', 'c++', 'sql'];

let years : number[] = [1,2,3,4,5,6,7,8,9,0];

console.log(cadena, edad, boolvar, varAny, arreglo, years);


// multiples tipos de datos
let cadena2 : string | number = "hola";
cadena2 = 3;

// tipo de datos personalizados
type alfanumerico = string | number;
let cadena3 : alfanumerico = "hola";
cadena3 = 3;

// var y let (alcance de la variable)
// var a nivel global
// let a nivel de bloque

var num1 = 10;
var num2 = 12;
if(true){
    let num1 = 44;
    var num2 = 55;
    console.log(num1, num2);
}

console.log(num1, num2);

// funciones
function getNum(numero:number = 12):string{
    return "el numero es : " + numero;
}

console.log(getNum(2));