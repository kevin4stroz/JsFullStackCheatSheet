[VOLVER AL INDICE](../../README.md)

# Eventos

funciones que se ejecutan cada ves que sucede algo. **Tener en cuenta que dentro del callback ejecutado en el eventlistener se puede acceder al elemento asociado, por medio del operador this.**

## onclick y ondblclick desde html

```html
<button onclick="console.log('clickeo el boton y se ejecuta desde el html');">Presioname1</button> </br></br>

<button ondblclick="console.log('clickeo el boton doble y se ejecuta desde el html');">Presioname2</button> </br></br>

<button id="boton" onclick="cambiarColor();">Presioname3</button></br></br>
```

```javascript
var boton = document.querySelector("#boton");

boton.style.padding = "10px";
boton.style.border = "1px solid #ccc";

function cambiarColor(){
    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    }else{
         boton.style.background = "green";
    }

    return true;
}
```

## load

Se ejecuta apenas se termina de rendirizar todo el html

```javascript
window.addEventListener("load", () => {
    // aqui debemos poner todo el codigo javascript
});
```

## addEventListener

```javascript
boton.style.padding = "10px";
boton.style.border = "1px solid #ccc";

var boton2 = document.querySelector("#boton2");

boton2.addEventListener("click",() => {
    this.style.border = "10px solid red";
    this.value = "cambiado";
    cambiarColor();
});
```

## mouseover y mouseout

```javascript
boton2.addEventListener("mouseover", () => {
    boton2.style.background = "purple";
})

boton2.addEventListener("mouseout", () => {
    boton2.style.background = "yellow";
})  
```

## focus

```javascript
var input_nombre = document.querySelector("#campo_nombre");

// focus
input_nombre.addEventListener("focus", () => {
    console.log("[focus] estas dentro del input");
});
```

## blur

```javascript
// blur
input_nombre.addEventListener("blur", () => {
    console.log("[blur] estas fuera del input");
});
```

## keydown

```javascript
// keydown
input_nombre.addEventListener("keydown", (event) => {
    console.log("[keydown] pulsando esta tecla :", String.fromCharCode(event.keyCode) );
});
```

## keypress

```javascript
// keypress
input_nombre.addEventListener("keypress", (event) => {
    console.log("[keypress] teclando esta tecla :", String.fromCharCode(event.keyCode) );
});
```

## keyup

```javascript
// keyup
input_nombre.addEventListener("keyup", () => {
    console.log("[keyup] soltando esta tecla :", String.fromCharCode(event.keyCode) );
});
```

# Timers

## setInterval

setinterval = ejecutacion una funcion de callback cada cierto intervalo de tiempo

```javascript
function Parpadeo(){
    var Encabezado = document.querySelector("#h_principal");

    var tiempo = setInterval(() => {
        console.log("Set Interval ejecutado cada 3 segundos");

        if(Encabezado.style.color == "red"){
            Encabezado.style.color = "green" ;
        }else{
            Encabezado.style.color = "red" ;
        }
            
    }, 500);

    return tiempo;
}
```

## setTimeut

timeout = solo se va ejecutar una vez en un lapso de tiempo

```javascript
var Encabezado2 = document.querySelector("#h_principal2");
var timpo2 = setTimeout(() => {
    console.log("Solo se ejecuta una vez en un delay de tiempo");
    Encabezado2.style.color = "lime" ;
}, 2000);
```

## botones de apagado y de inicio


```javascript
var tiempo = Parpadeo();
// boton para parar e iniciar el parpadeo

var stop = document.querySelector("#stop");
stop.addEventListener("click", ()=>{
    console.log("se paro el parpadeo");
    clearInterval(tiempo);
})

var start = document.querySelector("#start");
start.addEventListener("click", () =>{
    console.log("se inicia el parpadeo");
    tiempo = Parpadeo();
});
```
