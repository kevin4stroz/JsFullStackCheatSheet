'use strict'

// evento load, espera a que cargue todos los elementos y se ejecuta
window.addEventListener("load", () => {

    // eventos del raton

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

    // addEventListener
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    var boton2 = document.querySelector("#boton2");

    boton2.addEventListener("click",() => {
        this.style.border = "10px solid red";
        this.value = "cambiado";
        cambiarColor();
    });

    // evento mouseOver y mouseout

    boton2.addEventListener("mouseover", () => {
        boton2.style.background = "purple";
    })

    boton2.addEventListener("mouseout", () => {
        boton2.style.background = "yellow";
    })


    var input_nombre = document.querySelector("#campo_nombre");

    // focus
    input_nombre.addEventListener("focus", () => {
        console.log("[focus] estas dentro del input");
    });

    // blur
    input_nombre.addEventListener("blur", () => {
        console.log("[blur] estas fuera del input");
    });


    // keydown
    input_nombre.addEventListener("keydown", (event) => {
        console.log("[keydown] pulsando esta tecla :", String.fromCharCode(event.keyCode) );
    });

    // keypress
    input_nombre.addEventListener("keypress", (event) => {
        console.log("[keypress] teclando esta tecla :", String.fromCharCode(event.keyCode) );
    });

    // keyup
    input_nombre.addEventListener("keyup", () => {
        console.log("[keyup] soltando esta tecla :", String.fromCharCode(event.keyCode) );
    });


})







