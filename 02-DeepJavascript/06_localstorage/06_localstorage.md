[VOLVER AL INDICE](../../README.md)

# Local Storage

manera de almacenar informacion en el navegador y que persista mientras se navega por la pagina, se comporta como una memoria especifica de la pagina para poder guardar informacion. persista la informacion, aplicaciones MERN stack, proyecto web y compartir datos entre las diferentes secciones. 

Existe un localstorage por dominio para seguridad y aislamiento. lo guarda de tipo llave valor.

## Verificar compatibilidad

```javascript
if(typeof(Storage) !== 'undefined'){
    console.log("Tenemos disponible el local storage");
}else{
    console.log("Es incompatible el navegador")
}
```

## Guardar datos en el localstorage

```javascript
localStorage.setItem('titulo' , 'curso de javascript');
```

## leer un elemento del local storage y meterlo en el titulo

```javascript
var varLocal = localStorage.getItem('titulo');
document.querySelector("#titulo").innerHTML = varLocal;
```

## guardar y obtener objetos del localstorage

```javascript
var usuario = {
    nombre : "admin",
    email : "admin@mail.com",
    password : "1213131231"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

usuario = JSON.parse(localStorage.getItem("usuario"));

console.log(usuario);

document.querySelector("#titulo").innerHTML += " " +usuario.email;
```

## borrar el local storage

```javascript
localStorage.removeItem("usuario");
localStorage.clear();
```