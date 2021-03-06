[VOLVER AL INDICE](../../README.md)

# Arreglos

## Arreglos basicos

```javascript
var arreglo_nombres = [ "pepegrillo", "kevin", "david", "alejandra", 52 , true];
var lenguajes = [ "PHP", "JS" , "Go", "Java"];

console.log(arreglo_nombres);
console.log(lenguajes);

console.log(arreglo_nombres[0]);
console.log(lenguajes[3]);

console.log("cantidad de elementos : ", arreglo_nombres.length);
```

## Recorrer arrays

### for

```javascript
document.write("<h1>Lenguajes de programacion: </h1></br>");
document.write("<ul>");
for(let i=0; i<lenguajes.length; i++){
    document.write(`<li>${lenguajes[i]}</li></br>`);
}
document.write("</ul>");
```

### forEach

```javascript
document.write("<h1>For EachLenguajes de programacion: </h1></br>");
document.write("<ul>");

var lenguajes_2 = [ "PHP", "JS" , "Go", "Java"];
lenguajes.forEach( (elemento, indice, arreglo) => {
    console.log(arreglo);
    document.write(`<li>${indice} - ${elemento}</li></br>`);
});

document.write("</ul>");
```

### for in

```javascript
var lenguajes_3 = [ "PHP", "JS" , "Go", "Java"];
for(let lenguaje in lenguajes_3){
    document.write(`<strong>${lenguajes_3[lenguaje]}</strong></br>`);
}
```

## Arreglos multidimensionales

```javascript
var categoria = [ 'accion', 'terror', 'comedia'];
var peliculas = [ 'la verdad duele', ' la vida es bella', 'gran torino']

var cine = [ categoria, peliculas, [true,  true, false]];

console.log("multi array : ", cine);

console.log("imprimiendo categoria : ", cine[0][1]);
console.log("imprimiendo pelicula : ", cine[1][1]);
console.log("imprimiendo disponibilidad", cine[2][1]);
```

# Operaciones con arreglos


## Agregar un nuevo elemento

```javascript
peliculas.push("batman");
console.log("agregando peliculas : ",peliculas);
```

## borrado del ultimo elemento

```javascript
// borrando el ultimo elemento
peliculas.pop();    // eliminando ultimo elemento
console.log("quitando peliculas : ",peliculas);
```

## borrado de un elemento especifico

```javascript
var indice = peliculas.indexOf("gran torino");
console.log("indice de gran torino :" , indice);
if(indice > -1){
    peliculas.splice(indice, 1);    // eliminar un elemento
}
```

## convertir de string a array

```javascript
console.log(peliculas.join());
```

## convertir de array a string

```javascript
var cadena_s = "texto,texto2,texto3";
console.log("array a texto :", cadena_s.split(","));
```

## ordenar arreglos

```javascript
var arreglo_numeros = [100,4,5,8,87,32,9,89,1];
arreglo_numeros.sort( (a, b) => {return a-b} );
console.log("sort : ", arreglo_numeros);
arreglo_numeros.reverse();
console.log("reverse : ", arreglo_numeros);
```

## buscar en un arreglo

```javascript
var lenguajes_4 = [ "PHP", "JS" , "Go", "Java"];
var busqueda = lenguajes_4.find( (lenguaje) => {
    return lenguaje == "PHP";       // si no lo encuentra retornara undefined
});
console.log("Resultado de busqueda : ", busqueda);

busqueda = lenguajes_4.find( (lenguaje) => lenguaje == "PHP");
console.log("Resultado de busqueda : ", busqueda);

busqueda = lenguajes_4.findIndex( (lenguaje) => lenguaje == "Java");
console.log("Resultado de busqueda : ", busqueda);

var precios = [ 10, 20 , 50, 12];
busqueda = precios.some( precio => precio >= 20);
console.log("Resultado de busqueda si encuentra alguno : ", busqueda);
```