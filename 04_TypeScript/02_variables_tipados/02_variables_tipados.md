[VOLVER AL INDICE](../../README.md)

# Variables y tipados

## string

```javascript
let cadena : string = "hola mundo";
```

## number

```javascript
let edad : number = 26;
```

## booleano

```javascript
let boolvar : boolean = true;
```

## any

```javascript
let varAny : any = 'hola';
varAny = false;
```

## arrays

```javascript
let arreglo : Array<string> = ['php', 'c++', 'sql'];

let years : number[] = [1,2,3,4,5,6,7,8,9,0];

console.log(cadena, edad, boolvar, varAny, arreglo, years);
```

## multiples datos

```javascript
let cadena2 : string | number = "hola";
cadena2 = 3;
```

## tipo de datos personalizados

```javascript
type alfanumerico = string | number;
let cadena3 : alfanumerico = "hola";
cadena3 = 3;
```

## var y let

```javascript
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
```

## funciones

```javascript
function getNum(numero:number = 12):string{
    return "el numero es : " + numero;
}

console.log(getNum(2));
```