[VOLVER AL INDICE](../../README.md)

# Efectos y animaciones

## append, preprend, after, before, html, attr, removeAttr, text, length y val

```javascript
    console.log($('a').length);
    ReloadLink()

    $('#add_btn').removeAttr("disabled");

    $('#add_btn').click(function () { 

        var link_temp = $('#add_link').val(); 
        console.log(link_temp);  
        //$("#menu").html('<li><a href="'+link_temp+'"></a></li>'); sobre escribe el contenido de menu
        $("#menu").append('<li><a href="'+link_temp+'"></a></li>');
        $("#menu").prepend('<li><a href="'+link_temp+'"></a></li>');
        $("#menu").before('<li><a href="'+link_temp+'"></a></li>');
        $("#menu").after('<li><a href="'+link_temp+'"></a></li>');
        ReloadLink();

        $('#add_link').val('');
    });

    function ReloadLink(){
        $('a').each(function(index){
            var elemento = $(this);
            var enlace = elemento.attr('href');
            elemento.attr("target","_blank");
            elemento.text(enlace);
        });
    }
```

## Efectos

- hide, show, fadeIn, fadeOut, fadeTo, slideUp, slideDown

```javascript
    $("#mostrar").hide();
    $("#mostrar").click(function (e) { 
        $(this).hide('fast');

        $("#ocultar").show('normal');

        //$("#caja").fadeIn('slow');
        //$("#caja").fadeTo('slow', 1);
        $("#caja").slideUp('slow');
    });

    $("#ocultar").click(function (e) { 
        $(this).hide('low');

        $("#mostrar").show('fast');

        //$("#caja").fadeOut('slow');
        //$("#caja").fadeTo('slow', 0.1);
        $("#caja").slideDown('slow');
    });
```

- fadeToggle y toggle

```javascript
    $('#todo').click(function (e) { 
        $('#caja2').toggle('slow');       
    });

    $('#fadeTog').click(function (e) { 
        $('#caja3').fadeToggle('slow');       
    });
```

## Animaciones personalizadas

```javascript
    $('#animar').click(function (e) { 
        $('#caja4').animate({
            marginLeft :'500px',
            fontSize : '40px',
            height : '70px'
        },'slow')
        .animate({
            borderRadius: '900px',
            marginTop: '50px'
        },'slow')
        .animate({
            marginLeft :'0px',
            borderRadius: '1px',
            marginTop: '10px',
            fontSize : '19px',
            height : '50px'
        },'slow');       
    });

```

## callback en animaciones

```javascript
    $("#caja").slideDown('slow', function(){
        console.log("ejecucion de callback")
    });
```