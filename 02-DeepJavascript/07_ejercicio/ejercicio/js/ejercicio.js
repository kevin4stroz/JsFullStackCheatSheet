'use strict'

window.addEventListener("load", () => {
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", ()=>{
        var peliInpu = document.getElementById("addPelicula").value;
        if(peliInpu.length <= 1){
            alert("Pelicula vacia")
        }else{
            localStorage.setItem(peliInpu,peliInpu);
        }
    });

    var lista_peliculas = document.querySelector("#lista_peliculas");

    for(var i in localStorage){
        if(typeof(localStorage[i]) == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            lista_peliculas.appendChild(li);
        }
    }


    var form_delete = document.querySelector("#form_delete");

    form_delete.addEventListener("submit", ()=>{
        var deletePelicula = document.querySelector("#deletePelicula").value;
        if(deletePelicula.length <= 1){
            alert("Titulo vacio");
        }else{
            localStorage.removeItem(deletePelicula);
        }
    });

});
