'use strict'

window.addEventListener("load", ()=>{

    // verificar disponibilidad del localstorage
    if(typeof(Storage) !== 'undefined'){
        console.log("Tenemos disponible el local storage");
    }else{
        console.log("Es incompatible el navegador")
    }

    // guardar un dato en el localstorage
    localStorage.setItem('titulo' , 'curso de javascript');

    // leer un elemento y meterlo en el titulo
    var varLocal = localStorage.getItem('titulo');
    document.querySelector("#titulo").innerHTML = varLocal;

    // guardar y obtener un objeto
    var usuario = {
        nombre : "admin",
        email : "admin@mail.com",
        password : "1213131231"
    };

    localStorage.setItem("usuario",JSON.stringify(usuario));

    usuario = JSON.parse(localStorage.getItem("usuario"));

    console.log(usuario);

    document.querySelector("#titulo").innerHTML += " " +usuario.email;

    // borrar localstorage
    localStorage.removeItem("usuario");
    localStorage.clear();

});