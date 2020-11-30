[VOLVER AL INDICE](../../README.md)

# Ejercicios de arreglos

## Pida 6 numeros por pantalla y los meta en un array
```javascript
var contador = 0;
var arreglo = [];

do{
    let inputNumber = Number(prompt("Ingrese numero", 0));

    if(!isNaN(inputNumber)){
        contador++;
        arreglo.push(inputNumber);
    }

}while(contador < 6);
```

## mostrar el array entero en el cuerpo de la pagina y en la consola
```javascript
function imprimir(titulo, arreglo_){
    document.write(`
    <h1>${titulo}</h1>
    <ol>`);

    arreglo_.forEach(element => {
        console.log("numero del array : ", element);
        document.write(`        <li><strong>${element}</strong></li>`);
    });

    document.write(`    </ol></br>`);
}

imprimir("Elementos del arreglo", arreglo);
```

## sacar el vector ordenado y mostrarlo
```javascript
var array_sorted = arreglo.sort((a,b) => a-b);
imprimir("Arreglo Organizado", array_sorted);
```

## invertir su orden y mostrarlo
```javascript
var arreglo_reverse = array_sorted.reverse();
imprimir("Arreglo Invertido", arreglo_reverse);
```

## mostrar cuantos elementos tiene el array
```javascript
document.write(`<h1>Cantidad de elementos : <span style="color:red;">${arreglo.length}<span></h1>`);
```

## busqueda de un valor introducido por el usuario y que nos diga si esta en el array y su posicion

```javascript
var indiceFind = NaN;

do{
    indiceFind = Number(prompt("Ingrese numero a buscar:",0));
}while(isNaN(indiceFind));

let indice = arreglo_reverse.findIndex( (elemento) => elemento == indiceFind );

if( indice >= 0){
    document.write(`<h1 style="color:green;"> Numero: ${indiceFind} encontrado : ${indice}</h1>`);
}else{
    document.write(`<h1 style="color:red;"> Numero: ${indiceFind} no encontrado</h1>`);
}
```