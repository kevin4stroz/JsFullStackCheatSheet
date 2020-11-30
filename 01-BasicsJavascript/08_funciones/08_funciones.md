[VOLVER AL INDICE](../../README.md)

# Funciones

## Creación y llamado

```javascript
function calculadora(){
    return "Hola soy la calculadora"
}

console.log(calculadora(), calculadora(), calculadora());
```

## Parámetros de una función

```javascript
function calcula(operador, operando1, operando2){
    switch (operador) {
        case "+":
            var resultado = Number(operando1)+Number(operando2);
            console.log( operando1 + " " + operador+ " " + operando2 + " = " + resultado);
            break;
        case "-":
            var resultado = Number(operando1)-Number(operando2);
            console.log( operando1 + " " + operador+ " " + operando2 + " = " +resultado);
            break;
        
        default:
            console.log("no se reconoce la funcion")    
            break;
    }
}

calcula("+", 20, 10);
calcula("-", 20, 10);
```

## Parámetros opcionales

```javascript
function calcula(operador, operando1, operando2, mostrar=true){
    if(mostrar == true){
        var resultado = Number(operando1)-Number(operando2);
        console.log( operando1 + " " + operador+ " " + operando2 + " = " +resultado);
    }else if(mostrar == false){
        return Number(operando1)-Number(operando2);
    }
}

calcula("-", 1, 2);
var valor_retornado = calcula("-", 2, 3, false);
```

## Llamado de funciones dentro de funciones

```javascript

function porConsola(num1, num2){
    console.log("numero 1 = " + num1);
    console.log("numero 2 = " + num2);
}

function porDocumento(num_1, num_2){
    document.write("<strong> numero 1 = " + num_1 + "</strong></br>");
    document.write("<strong> numero 2 = " + num_2 + "</strong>");
}

function llamadofunciones(n1, n2, mostrar="consola"){
    if(mostrar == "consola"){
        porConsola(n1, n2);
        return true;
    }
    else if(mostrar == "documento"){
        porDocumento(n1, n2);
        return true;
    }else{
        console.log("no se reconoce la opcion");
        return false;
    }
}

llamadofunciones(3, 2);
llamadofunciones(4, 5, "documento");
```

## Parámetros rest y spread

```javascript
// parametros de tipo rest
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta 1 : ", fruta1);
    console.log("Fruta 2 : ", fruta2);
    console.log("Resto de frutas : ", restoFrutas);
}

listadoFrutas("Manzana", "Pera", "Sandia", "Melon", "Coco");

// parametros spread
var frutas = ["Manzana", "Pera"];
listadoFrutas(...frutas , "Sandia", "Melon", "Coco");
```

## Funciones anónimas 

```javascript
// funciones anonimas : es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es : " + nombre;
}

pelicula("Programador raro");
```

## Callbacks

```javascript
// callback : es una funcion que se ejecuta dentro de otra
function sumame(n1, n2 , suma_muestra, sumaPorDos){
    var sumar = n1 + n2;

    suma_muestra(sumar);
    sumaPorDos(sumar);
}

sumame(
    5, 
    6, 
    function(dato){
        console.log("La suma es : ", dato);
    },
    function(dato){
        console.log("la suma por dos es : ", dato*2);
    }
);
```

## Funciones de tipo flecha

```javascript
// funciones de flecha: definir una funcion con flecha, forma de defincion mas limpia y clara
sumame(
    5, 
    6, 
    (dato) => {
        console.log("La suma es : ", dato);
    },
    (dato) => {
        console.log("la suma por dos es : ", dato*2);
    }
);
```

# Métodos para procesar texto

## Transformación de textos

```javascript
// minusculas y mayusculas
console.log( "abcdefghijk".toUpperCase() );
console.log( "ABCDEFGHIJK".toLowerCase() );

// tamaño de string tener encuenta 0 o undefined
var cadena = "hola como estas";
var cadena_vacia = ""
var arreglo = [ 1, 2, 3, 6];
console.log( "el tamaño del string es de : ", cadena.length);
console.log( "el tamaño del string es de : ", cadena_vacia.length);
console.log( "el tamaño del array es de : ", arreglo.length);

// concatenar
var txt1 = "nombre hola";
var txt2 = "segundo texto";
var texto_total1 = txt1.concat(" "+txt2);
var texto_total2 = txt1 + " " + txt2;
```

## Búsqueda de textos

```javascript
// busqueda si no encuentra = -1
var lore = "Lorem aaa ipsum dolor sit amet, consectetur adipiscing elit. Donec at pharetra ligula, non posuere ante. Curabitur suscipit sapien magna, eu pharetra nisi maximus sed. Integer sed vulputate libero. Nam vehicula fermentum nisi, id blandit tortor aaa malesuada et. Cras ultricies enim a massa dictum, eget aaa consectetur dui maximus. Sed congue tellus eu turpis mattis accumsan. Suspendisse potenti. Duis maximus diam ac urna rhoncus rutrum. Integer vehicula  aaa congue eros, ac fermentum est vehicula ut. Aenean viverra sed diam ut bibendum. Fusce mi leo, lobortis non aliquam sit amet, dictum ac mi. Integer nec interdum metus. Sed sed  aaa sollicitudin ex, pharetra ultricies eros."

var busqueda = lore.indexOf("rutrum");
console.log("indice encontrado primera incidencia : ", busqueda);

busqueda = lore.lastIndexOf("rutrum");
console.log("indice encontrado ultima incidencia : ", busqueda);

busqueda = lore.search("rutrum");
console.log("indice encontrado alias search indexof : ", busqueda);

busqueda = lore.match(/aaa/g);
console.log("cuantas veces se encuentra : ", busqueda);

function getInd(arr, val) { 
    var index = [], i = 0;
    while ((i = arr.indexOf(val, i+1)) != -1){ 
        index.push(i); 
    } 
    return index; 
} 

console.log("todos los indices ;" , getInd(lore, 'aaa') );

busqueda = lore.substr(10, 40);
console.log("Sub string : ", busqueda);

busqueda = lore.charAt(55);
console.log("un solo caracter del texto dada la posicion : ", busqueda);

busqueda = lore.startsWith("lobortis non aliquam sit amet");
console.log("inicio del string : ", busqueda )

busqueda = lore.endsWith("pharetra ultricies eros.");
console.log("inicio del string : ", busqueda );

busqueda = lore.includes("aaa");
console.log("si dentro del texto existe : ", busqueda );
```

## Funciones de reemplazo de texto

```javascript
var str_prueba = "prueba Prueba prueba Prueba";
console.log("funcion replace = ",str_prueba.replace("Prueba", "Cambiado"));

str_prueba = "prueba Prueba prueba Prueba";
console.log("funcion slice =",str_prueba.slice(7,12))

str_prueba = "prueba Prueba prueba Prueba";
console.log("funcion split =",str_prueba.split(" "));

str_prueba = " prueba Prueba prueba Prueba ";
console.log("funcion trim =",str_prueba.trim());
```

## Plantillas de texto

```javascript
var nombre = "Kevin Astroz";
var edad = 26;
var texto = `
    <h1>Hola que tal tu nombre es : ${nombre}</h1></br>
    <h1>Tu edad es : ${edad} </h1></br>
`
document.write(texto);
```