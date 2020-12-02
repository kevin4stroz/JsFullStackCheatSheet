[VOLVER AL INDICE](../../README.md)

# Fetch

Es un metodo que nos permite realizar peticiones ajax de manera mas facil. una llamada a un servicio rest. Peticiones ajax y conseguir resultados de un API REST. se hara uso de  [JsonPlaceHolder](https://jsonplaceholder.typicode.com/) es un apirest fake para hacer peticiones.

Otro servicio rest es [reqres.in](https://reqres.in/)

Extension JsonView para chrome

```javascript
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (data) => {
        return data.json();
    })
    .then( (data) =>{
        usuarios = data;
        console.log(usuarios);
    })
```

# Promesas

Utiles para evitar el callback hell, esto sucede cuando se trabaja con datos asincronos. 


```javascript
    getAllUsers()
    .then( (data) => {
        return data.json();
    })
    .then( (data) =>{
            usuarios2 = data.data;
        listadoUsuarios(usuarios2,div)
        return getOneUser(usuarios2[1].id);
    })
    .then( (data) => {
        return data.json()
    })
    .then( (user_def) => {
        let usrTemp = user_def.data
        listadoOneUser(usrTemp,divusuario_especifico);
    })
```

funciones

```javascript
    function listadoUsuarios(usr,div_put){
        console.log(usr);

        usr.map( (users, i) => {
            let nombre = document.createElement("p");
            nombre.style.color ="lime";

            nombre.innerHTML =  "<b>id :</b> " + users.id +" <b>Correo :</b> " +
                                users.email + " <b>Nombre :</b> " + users.first_name + " " +
                                users.last_name;

            div_put.appendChild(nombre);

            document.querySelector(".load_span").style.display = 'none';
        })
    }

    function listadoOneUser(usr,div_put){
        console.log(usr);

        let nombre = document.createElement("p");
        nombre.style.color ="lime";

        nombre.innerHTML =  "<b>id :</b> " + usr.id +" <b>Correo :</b> " +
                            usr.email + " <b>Nombre :</b> " + usr.first_name + " " +
                            usr.last_name;

        div_put.appendChild(nombre);

        document.querySelector(".load_span2").style.display = 'none';
        
    }

    function getAllUsers(){
        return fetch('https://reqres.in/api/users?page=1');
    }

    function getOneUser(id){
        return fetch('https://reqres.in/api/users/' + id);
    }
```

## Crear promesas

es una funcion que retorna un objeto promise, el resolve sera si todo se ejecuto bien y el reject sera si hubo algun error, tener en cuenta el encadenamiento de las promesas. se usan cuando son tareas asincronas.

```javascript
    function getPromises(){
        var info = {
            nombre : "Kevin",
            apellidos : "Astroz",
            edad : 26
        }

        return new Promise((resolve, reject) => {
            var informacion;

            setTimeout( () =>{
                console.log("terminado de procesa el json 3 segundos");
                informacion = JSON.stringify(info);
                if(typeof informacion != 'string'){
                    return reject("error");
                }else{
                    return resolve(informacion);
                }
            },3000);
        });
    }

    // llamado del promise
    getPromises()
    .then( (data) => {
        console.log(JSON.parse(data));
    })
```

## Capturar errores en promises

```javascript
    getPromises()
    .then( (data) => {
        console.log(JSON.parse(data));
    })
    .catch( (error) =>{
        console.log(error);
    });
```

## capturar error en codigo

``` javascript
try{
    var vector = new Array(999999999999999999999999999999999999);
}catch(error){
    console.log(error)
}
```