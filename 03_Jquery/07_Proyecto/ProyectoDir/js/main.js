$(document).ready(function () {
    // slider
    if(window.location.href.indexOf('index') > -1){
        $(function(){
            $('.bxslider').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 1200
            });
        });

        // posts
    var postJson = [
        {
            title : 'prueba de titulo',
            fecha : moment().format('MMMM dddd YYYY'),
            content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum, molestiae dignissimos mollitia officiis reiciendis voluptatibus autem necessitatibus alias officia nostrum pariatur aliquid id molestias dolorem ad voluptate? Optio, debitis!

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus magni explicabo culpa quis mollitia minima quaerat, quasi fuga odio quo, nesciunt aut officia error natus perferendis ipsum, modi praesentium!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga nihil quae consequatur! Omnis fugiat enim commodi libero incidunt eveniet repellendus voluptatem unde! Quae aspernatur doloribus corrupti iure! Odio, ea.`
        },
        {
            title : 'prueba de titulo',
            fecha : moment().format('MMMM dddd YYYY'),
            content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum, molestiae dignissimos mollitia officiis reiciendis voluptatibus autem necessitatibus alias officia nostrum pariatur aliquid id molestias dolorem ad voluptate? Optio, debitis!

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus magni explicabo culpa quis mollitia minima quaerat, quasi fuga odio quo, nesciunt aut officia error natus perferendis ipsum, modi praesentium!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga nihil quae consequatur! Omnis fugiat enim commodi libero incidunt eveniet repellendus voluptatem unde! Quae aspernatur doloribus corrupti iure! Odio, ea.`
        },
        {
            title : 'prueba de titulo',
            fecha : moment().format('MMMM dddd YYYY'),
            content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum, molestiae dignissimos mollitia officiis reiciendis voluptatibus autem necessitatibus alias officia nostrum pariatur aliquid id molestias dolorem ad voluptate? Optio, debitis!

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus magni explicabo culpa quis mollitia minima quaerat, quasi fuga odio quo, nesciunt aut officia error natus perferendis ipsum, modi praesentium!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga nihil quae consequatur! Omnis fugiat enim commodi libero incidunt eveniet repellendus voluptatem unde! Quae aspernatur doloribus corrupti iure! Odio, ea.`
        },
        {
            title : 'prueba de titulo',
            fecha : moment().format('MMMM dddd YYYY'),
            content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum, molestiae dignissimos mollitia officiis reiciendis voluptatibus autem necessitatibus alias officia nostrum pariatur aliquid id molestias dolorem ad voluptate? Optio, debitis!

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus magni explicabo culpa quis mollitia minima quaerat, quasi fuga odio quo, nesciunt aut officia error natus perferendis ipsum, modi praesentium!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga nihil quae consequatur! Omnis fugiat enim commodi libero incidunt eveniet repellendus voluptatem unde! Quae aspernatur doloribus corrupti iure! Odio, ea.`
        }
    ];

    var postDiv = $('#posts');

    postJson.forEach((item, index)=>{
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">Publicado : ${item.fecha}</span>
            <p>
                ${item.content}
            </p>
            <a class="btn_more" href="#">Leer Mas</a>
        </article>
        `;

        postDiv.append(post);
    })
    console.log(postJson)
    
    }
    

    // selector de tema
    var themeLink = $("#theme")

    $('#blueTheme').click(function (e) { 
        e.preventDefault();
        themeLink.attr("href", "css/blue.css");
    });

    $('#redTheme').click(function (e) { 
        e.preventDefault();
        themeLink.attr("href", "css/red.css");
    });

    $('#greenTheme').click(function (e) { 
        e.preventDefault();
        themeLink.attr("href", "css/green.css");
    });

    // scroll
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },500)
        return false;
    })

    // login falso
    $('#login form').submit(function(e){
        var nombre = $('#nombre').val();
        
        localStorage.setItem('form_name',nombre);
    })

    var localSName = localStorage.getItem('form_name');
    if(localSName != null && localSName != 'undefined'){
        $('#about p').html("<br><hr><strong>Bienvenido "+ localSName+ "<strong><hr>");
        $('#about p').append('<a href="#" id="logout">Cerrar sesion</a>');
        $('#login').hide();

        $('#logout').click(function () {  
            localStorage.clear();
            location.reload();
        })
    } 
    
    // acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }
    


    
});