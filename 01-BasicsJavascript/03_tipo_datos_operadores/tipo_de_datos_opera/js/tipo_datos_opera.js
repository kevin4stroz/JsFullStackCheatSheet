'use strict'

alert("Operadores");

//operadores
var num1 = 7;
var num2 = 12;
var operacion = num1 + num2;

// operaciones de asignacion
operacion += num1;
operacion -= num1;
operacion *= num1;
operacion /= num1;
operacion %= num1;
operacion **= num1;
operacion <<= num1;
operacion >>= num1;
operacion >>>= num1; // desplazamiento a la derecha sin signo
operacion &= num1; 
operacion ^= num1;
operacion |= num1;
operacion &&= num1; // x && (x = y)
operacion ||= num1; // x || (x = y)
operacion ??= num1; // x ?? (x = y)


var foo = ['one', 'two', 'three'];

// sin desestructurar
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;

// operadores de comparacion 
operacion = num1 == num2;
operacion = num1 != num2;
operacion = num1 === num2; // estrictamente igual
operacion = num1 !== num2; // estrictamente diferente
operacion = num1 < num2;
operacion = num1 <= num2;
operacion = num1 > num2;
operacion = num1 >= num2;


// operadores logicos
operacion = true && true;
operacion = false || false;
operacion = !true 

// operadores de concatenacion
var string_result = "hola" + " prueba";

// operador ternario 
var age = 20;
var result = (age >= 18) ? 'adult' : 'minor';

// operadores uniarios
var diccionario = { 'name':'kevin' };
delete diccionario.name;                // operador borra una propiedad de un objeto
console.log(diccionario);

var tipo_dato = typeof diccionario;     // operador devuelve que tipo de dato es una variable
console.log(tipo_dato);

diccionario['nombre'] = 'kevin';
console.log('nombre' in diccionario);   // comprueba si existe una propiedad en un objeto

var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {           // verifica que una variable sea un tipo especifico
    console.log("si es una fecha");
}

alert("El resultado de la operacion es: " + operacion);


//tipo de datos

/*
Undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean"
Number: typeof instance === "number"
    +Infinity, -Infinity y NaN
String: typeof instance === "string"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"
typeof instance === "function"
typeof instance === "object"
*/
var entero = 44;
var flotante = 4.3;
var cadena_texto = "Hola 'que' tal";
var booleano = false; // 1 booleano = true; 
var objc = { name : "kevin"};

var numero_falso = "44" ;
var conversion = Number(numero_falso);
conversion = parseInt(numero_falso);
conversion = parseFloat(numero_falso);
var numero = 222;
var Strnumero = String(numero);


