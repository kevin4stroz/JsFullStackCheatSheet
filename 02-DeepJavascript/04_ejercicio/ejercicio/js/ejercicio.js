'use strict'

var nombre = "NONE";
var apellido = "NONE";
var edad = 0;

var span_nombre = {};
var span_apellido = {};
var span_edad = {};

window.addEventListener("load", () => {

    // ocultado cajas
    var mostrarDiv = document.querySelector("#mostrarDiv");
    mostrarDiv.style.display = "none";

    // capturando span de errores
    var er_nombre = document.querySelector("#er_nombre")
    var er_apellido = document.querySelector("#er_apellido");
    var er_edad = document.querySelector("#er_edad");

    // capturando inputs 
    nombre = document.querySelector("#nombre");
    apellido = document.querySelector("#apellido");
    edad = document.querySelector("#edad");

    // capturando spans
    span_nombre = document.querySelector("#span_nombre");
    span_apellido = document.querySelector("#span_apellido");
    span_edad = document.querySelector("#span_edad");

    // evento submit del formulario
    var formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", () =>{
        // mostrando datos por pantalla
        if(nombre.value != "" &&  apellido.value != "" && edad.value != "" && !isNaN(parseInt(edad.value)) && parseInt(edad.value) > 0 ){
            mostrarDiv.style.display = "block";
            span_nombre.innerHTML = nombre.value;
            span_apellido.innerHTML = apellido.value;
            span_edad.innerHTML = edad.value;
        }else{

            if( nombre.value == null || nombre.value.length == 0){
                er_nombre.style.display = "block";
            }

            if( apellido.value == null || apellido.value.length == 0){
                er_apellido.style.display = "block";
            }

            if( edad.value == null || edad.value.length <= 0 || isNaN(parseInt(edad.value)) || parseInt(edad.value) < 0){
                er_edad.style.display = "block";
            }

            var tiempo_view = setTimeout(() => {
                er_edad.style.display = "none";
                er_apellido.style.display = "none";
                er_nombre.style.display = "none";
            }, 7000);
        }
    });

    // mostrar datos en el formulario
    var btnDiv = document.querySelector("#btnDiv");
    btnDiv.addEventListener("click", ()=>{
        span_nombre.innerHTML = "NONE";
        span_apellido.innerHTML = "NONE";
        span_edad.innerHTML = "0";
        nombre.value = "";
        apellido.value = "";
        edad.value = "";
        mostrarDiv.style.display = "none";
    });

});
