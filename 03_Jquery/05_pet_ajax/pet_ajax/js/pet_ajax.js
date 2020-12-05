'use strict'

$(document).ready(function () {
    
    // se puede cargar el html en claro dentro de un elemento ejemplo 
    // aplicacion monolitica
    $('#datos').load("https://reqres.in");

    // peticion get
    $.get("https://reqres.in/api/users", {page:2}, function(response){
        console.log(response);
        response.data.forEach((element, index) =>{
            $("#datos2").append("<p>"+element.first_name+"</p>");
        })
    })

    // peticion post
    var usuario = {
        "nombre":"Kevin",
        "apellido":"Astroz"
    }

    $.post("https://reqres.in/api/users", usuario,
        function (response, textStatus, jqXHR) {
            console.log("peticion post : ",response);
        }
    );

    $("#miform").submit(function(e){
        e.preventDefault();

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

        return false;
    });

    // forma de manejar peticion ajax
    $("#miform2").submit(function(e){
        e.preventDefault();
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
        return false;
    });

});