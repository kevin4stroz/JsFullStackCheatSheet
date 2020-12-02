'use strict'

window.addEventListener("load", ()=>{
    
    var usuarios = [];
    var usuarios2 = [];
    var div = document.querySelector("#usuarios");
    var divusuario_especifico = document.querySelector("#usuario_especifico");

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

        let avatar = document.createElement("img");
        avatar.src= usr.avatar;
        avatar.style.width = '100px';

        div_put.appendChild(avatar);        
    }

    function getAllUsers(){
        return fetch('https://reqres.in/api/users?page=1');
    }

    function getOneUser(id){
        return fetch('https://reqres.in/api/users/' + id);
    }

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

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (data) => {
        return data.json();
    })
    .then( (data) =>{
        usuarios = data;
        console.log(usuarios);
    })

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
    
    getPromises()
    .then( (data) => {
        console.log(JSON.parse(data));
    })
    .catch( (error) =>{
        console.log(error);
    });

    try{
        var vector = new Array(999999999999999999999999999999999999);
    }catch(error){
        console.log(error)
    }

});

