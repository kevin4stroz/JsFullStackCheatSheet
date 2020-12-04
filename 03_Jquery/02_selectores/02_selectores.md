[VOLVER AL INDICE](../../README.md)

# Selectores

Comprobacion del documento esta listo

```javascript
    $(document).ready(function(){
        
    })

    jQuery(document).ready(function(){
        
    })

    $(Selector).ready(function(){
        
    })
```
## Selector de id

```javascript
    // seleccionar rojo
    var rojo = $("#rojo");
    rojo.css("background", "red");

    // seleccionar verde
    $("#verde").css("background", "lime")
               .css("color", "purple");

    // seleccionar amarillo
    $("#amarillo").css("background", "yellow")
              .css("color", "white");

    
```

## Selectores de clase

```javascript
    // seleecionar clase zebra
    var zebra = $('.zebra').css('padding','5px');

    // indices y obtener elementos
    console.log(zebra);
    console.log(zebra[0]);
    console.log(zebra.eq(1));   // es mejor asi por que hereda los metodos jquery

    $('.sin_borde').click(function(){
        console.log("click")
        $(this).addClass('zebra')
    })
```

## Selectores de etiqueta

```javascript
    // seleccionar parrafos
    $('p').click(function(){
        var _this = $(this)
        if(!_this.hasClass('grande')){
            _this.addClass("grande");
        }else{
            _this.removeClass('grande');
        }
    }).css("cursor","pointer");
```

## Seleccionar atributos

```javascript
// selectores de atributos
    $('[title="Google"]').css("background","#ccc");
    $('[title="facebook"]').css("background","blue");
```

## Parent y find

```javascript
    // find  y parent
    $('p, a').addClass("margensuperior");
    var encontrado = $('#caja').find('.resaltado');
    console.log(encontrado);

    // salir del objeto donde estas
    var li = encontrado.eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(li);
```

## Agregar elementos

```javascript
    $("p").append("Some appended text.");
```