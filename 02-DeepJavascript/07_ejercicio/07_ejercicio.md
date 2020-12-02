[VOLVER AL INDICE](../../README.md)

# Ejercicio LocalStorage y Json

- formulario que nos permita añadir peliculas, almacenarlas en el localstorage

```html
<h2>Agregar pelicula</h2>
<form id="formulario" action="">
    <input type="text" id="addPelicula">
    <button type="submit">Guardar</button>
</form>
```

```javascript
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", ()=>{
    var peliInpu = document.getElementById("addPelicula").value;
    if(peliInpu.length <= 1){
        alert("Pelicula vacia")
}else{
        localStorage.setItem(peliInpu,peliInpu);
    }
});
```

- formulario que nos permite borrar peliculas, borrarlas del localstorage

```html
<h2>Borrar pelicula</h2>
<form id="form_delete" action="">
    <input type="text" id="deletePelicula">
    <button type="submit">Borrar</button>
</form>
```

```javascript
var form_delete = document.querySelector("#form_delete");

form_delete.addEventListener("submit", ()=>{
    var deletePelicula = document.querySelector("#deletePelicula").value;
    if(deletePelicula.length <= 1){
        alert("Titulo vacio");
    }else{
        localStorage.removeItem(deletePelicula);
    }
});
```

- listarlas en el html

```html
<h2>Lista de peliculas</h2>

<ul id="lista_peliculas">
</ul>

```

```javascript
var lista_peliculas = document.querySelector("#lista_peliculas");

for(var i in localStorage){
    if(typeof(localStorage[i]) == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        lista_peliculas.appendChild(li);
    }
}
```