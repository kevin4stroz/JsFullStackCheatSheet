[VOLVER AL INDICE](../../README.md)

# Ejercicios

## Ejercicio 1

Recibir dos números y decir cual es mayor, cual es menor y si son iguales

```javascript
var num1 = 0;
var num2 = 0;
var mayor = 0;
var menor = 0;

do{
    num1 = Number(prompt("Primer numero :", 0));
    num2 = Number(prompt("Segundo numero :", 0));

    alert("EJERCICIO 1 : " + num1 + ", " + num2);

    if( isNaN(num1) || isNaN(num2) ){
        alert("numeros mal ingresados, ingreselos de nuevo");
    }

}while( isNaN(num1) || isNaN(num2) );

if( num1 == num2 ){
    console.log("los numeros son iguales")
}
else if( num1 > num2 ){
    mayor = num1;
    menor = num2;
    console.log("mayor : " + mayor);
    console.log("menor : " + menor);
}
else{
    mayor = num2;
    menor = num1;
    console.log("mayor : " + mayor);
    console.log("menor : " + menor);
}
```

# Ejercicio 2

utilizando un bucle mostrar la media y la suma hasta que metamos un numero negativo o una letra

```javascript
var sumatoria = 0;
var media = 0;
var contador = 0;

var ingreso = Number(prompt("ingresar numero : ", 0));

while(ingreso > 0 && !isNaN(ingreso)){
    contador += 1;
    sumatoria += ingreso;

    ingreso = Number(prompt("ingresar numero : ", 0));
}

media = sumatoria / contador;

console.log("Cantidad de numeros ingresado : " + contador);
console.log("Sumatoria : " + sumatoria);
console.log("Media : " + media);
```

# Ejercicio 3

hacer un programa que muestre el rango de numeros entre dos numeros dados.

```javascript
var num1 = 0;
var num2 = 0;

do{
    num1 = Number(prompt("primer numero : ", 0));
    num2 = Number(prompt("segundo numero : ", 0))
}while( isNaN(num1) || isNaN(num2));

var mayor = ( num1 >= num2 ) ? num1 : num2 ;
var menor = ( num1 >= num2 ) ? num2 : num1 ;

document.write("<h1>Numeros de "+menor+" a "+mayor+"</h1>");

for(let i = menor  ; i <= mayor ; i++){
    console.log(" " + i);
    document.write("<strong>"+i+"</strong></br>");
}
```

# Ejercicio 4

mostrar todos los numeros impares entre dos numeros dados

```javascript
var num1 = 0;
var num2 = 0;

do{
    num1 = Number(prompt("primer numero : ", 0));
    num2 = Number(prompt("segundo numero : ", 0))
}while( isNaN(num1) || isNaN(num2));

var mayor = ( num1 >= num2 ) ? num1 : num2 ;
var menor = ( num1 >= num2 ) ? num2 : num1 ;

document.write("<h1>Numeros impares de "+menor+" a "+mayor+"</h1>");

var aumento = (menor % 2 == 0) ? 1 : 0 ;

for(let i = menor + aumento ; i <= mayor ; i += 2){
    console.log(" " + i);
    document.write("<strong>"+i+"</strong></br>");
}
```

# Ejercicio 5

Mostrar todos los numeros divisores de un numero en un rango

```javascript
var num1 = 0;
var num2 = 0;
var divisor = 0;

do{
    num1 = Number(prompt("primer numero : ", 0));
    num2 = Number(prompt("segundo numero : ", 0));
    divisor = Number(prompt("Divisor : ", 0));
}while( isNaN(num1) || isNaN(num2));

var mayor = ( num1 >= num2 ) ? num1 : num2 ;
var menor = ( num1 >= num2 ) ? num2 : num1 ;

document.write( "<h1>Numeros Divisores de "+divisor+
                " entre "+menor+" a "+mayor+"</h1>");

for(let i = menor ; i <= mayor ; i++){
    if(i % divisor == 0){
        console.log(" " + i);
        document.write("<strong>"+i+"</strong></br>");
    }
}
```

