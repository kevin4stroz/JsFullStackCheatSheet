// string
var cadena = "hola mundo";
// number
var edad = 26;
// booleano
var boolvar = true;
// Any
var varAny = 'hola';
varAny = false;
// Arrays
var arreglo = ['php', 'c++', 'sql'];
var years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(cadena, edad, boolvar, varAny, arreglo, years);
// multiples tipos de datos
var cadena2 = "hola";
cadena2 = 3;
var cadena3 = "hola";
cadena3 = 3;
// var y let (alcance de la variable)
// var a nivel global
// let a nivel de bloque
var num1 = 10;
var num2 = 12;
if (true) {
    var num1_1 = 44;
    var num2 = 55;
    console.log(num1_1, num2);
}
console.log(num1, num2);
// funciones
function getNum(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es : " + numero;
}
console.log(getNum(2));
