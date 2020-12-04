[VOLVER AL INDICE](../../README.md)

# Eventos

## MouseOver y MouseOut

Tener en cuenta que se puede hacer con csss

```css
    #caja:hover{
    transition: 1500ms all;
    background: tomato;
    cursor: pointer;
    }
```

```javascript
    var caja = $("#caja");
    caja.mouseover(function () { 
        $(this).css("background","tomato");
    });

    caja.mouseout(function () { 
        $(this).css("background","lime");
    });
```

## Hover

Lo mismo que antes pero menos codigo

```javascript
    $("#caja").hover(function () {
            // over
            $(this).css("background","tomato");
        }, function () {
            // out
            $(this).css("background","lime");
        }
    );
```

## Click y DoubleClick

```javascript
    $("#caja").click(function (e) { 
        $(this).css("background","red");        
    });

    $("#caja").dblclick(function(){
        $(this).css("background","pink"); 
    })
```

## Focus y Blur

```javascript
    $('#nombre').focus(function (e) { 
        $(this).css("border","2px solid lime");        
    });

    $('#nombre').blur(function (e) { 
        $(this).css("border","1px solid #ccc");
        var texto = $(this).val();          // Capturar values del input
        $("#datos").text(texto).show();     // mostrar elemento
    });
```

## MouseDown y MouseUp

```javascript
    $('#datos').mousedown(function () { 
        $(this).css("border-color", "gray");
    });

    $('#datos').mouseup(function () { 
        $(this).css("border-color", "yellow");
    });
```

## MouseMove

```javascript
    $('#datos').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        console.log("x : " + e.clientX);
        console.log("y : " + e.clientY);
    });

    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $("body").css("cursor","none");
        console.log("x : " + e.clientX);
        console.log("y : " + e.clientY);
        var sigueme = $("#sigueme");
        sigueme.css("left", e.clientX + 20);
        sigueme.css("top", e.clientY + 20);

    });
```