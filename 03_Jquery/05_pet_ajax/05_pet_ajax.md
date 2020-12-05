[VOLVER AL INDICE](../../README.md)

# Peticiones Ajax Jquery

Ajax es una tecnologia que nos permite hacer peticiones asincronas a un servidor, recoger los resultados sin tener que actulizar la pagina.

Aplicacion (back y front en una misma aplicacion) nos devuelve un html

## carga de html 

paralas aplicaciones monoliticos

```javascript
    $('#datos').load("https://reqres.in");
```

## peticion get

```javascript
    $.get("https://reqres.in/api/users", {page:2}, function(response){
        console.log(response);
        response.data.forEach((element, index) =>{
            $("#datos2").append("<p>"+element.first_name+"</p>");
        })
    })
```

## peticion post

```javascript
    console.log("submit ejecutadonse")
    var user = {
        "nombre" : $('input[name="nombre"]').val(),
        "apellido" : $('input[name="apellido"]').val()
    }

    $.post($(this).attr("action"), user, 
        function (response) {
            console.log("peticion form : ", response);
            $("#datos3").append(JSON.stringify(response))
        }
    )
    .done(
        function(){
            alert("datos insertados");
        }
    );
```

## $.ajax

```javascript
$.ajax({
    type:'POST',
    data: {
        "nombre":"Kevin"
    },
    url: "https://reqres.in/api/users",
    beforeSend: function(){
        console.log("enviando nombre de usuarip");
    },
    success:function(){
        console.log("peticion correcta")
    },
    error:function(){
        console.log("peticion incorrecta")
    },
    timeout:2000
});
```