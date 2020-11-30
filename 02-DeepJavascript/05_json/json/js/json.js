'use strict'

window.addEventListener("load", ()=>{
    // Creacion
    var pelicula = {
        titulo: "batman vs superman",
        year: 2017,
        pais: "Estados unidos"
    }

    console.log(pelicula);
    console.log("PELICULA : ", pelicula.titulo);

    pelicula.titulo = "superman behing";

    console.log("PELICULA : ", pelicula.titulo);

    // arrays de json
    var peliculas = [
        {titulo: "matrix",year: 2001,pais: "Estados unidos"},
        pelicula
    ];

    // mostrarlo en pantalla
    var lista_pel = document.querySelector("#lista_pel");

    peliculas.forEach((pelicula)=>{
        var item_pel = document.createElement("li");
        var texto = document.createTextNode(`${pelicula.titulo} - ${pelicula.year}`);
        item_pel.appendChild(texto);

        lista_pel.appendChild(item_pel);
    });


    var titulo_element = document.createElement("h1");
    var titulo_texto = document.createTextNode("Nombre peliculas");

    titulo_element.appendChild(titulo_texto);
    titulo_element.style.color="red";

    var mi_div = document.querySelector("#mi_div")

    mi_div.prepend(titulo_element);
});
