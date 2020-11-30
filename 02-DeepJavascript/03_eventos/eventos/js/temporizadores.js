'use strict'

window.addEventListener("load", () => {
    // timeout = solo se va ejecutar una vez en un lapso de tiempo
    var Encabezado2 = document.querySelector("#h_principal2");
    var timpo2 = setTimeout(() => {
        console.log("Solo se ejecuta una vez en un delay de tiempo");
        Encabezado2.style.color = "lime" ;
    }, 2000);


    // setinterval = ejecutacion una funcion de callback cada cierto intervalo de tiempo
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
});