[VOLVER AL INDICE](../../README.md)

# Jquery UI

Jquery UI nos permite tener un monton de metodos y una seria de pluggins para tener varios efectos dentro de la web

si solo se quiere cargar los metodos basicos

```html
<script type="text/javascript" src="js/jquery-ui-1.12.1/jquery-ui.min.js"></script>
```

Si se quiere usar opciones como resize y otras funciones

```html
<!--cargando estilos de jquery-->
<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.min.css">
<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.structure.min.css">
<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.theme.min.css">
```

## Mover elementos en la pagina

```javascript
$('.elemento').draggable();
```

## Redimencionar elemento

```javascript
$('.elemento').resizable();
```

## Seleccionar un elemento de una lista

```javascript
$('.lista_seleccionable').selectable();
```

## Ordenar elementos

```javascript
$('.lista_seleccionable').sortable({
    update:function(event, ui){
        console.log("ha cambiado la lista")
    }
});
```

## Arrastrar u soltar

```javascript
$('#movible').draggable()
$('#area').droppable({
    drop:function(){
        console.log("Se suelta elemento en al area")
    }
});
```

## Efectos

```javascript
$("#mostrar").click(function(){
    $('.caja-efecto1').toggle("explode");
    $('.caja-efecto1').toggle("slide");
    $('.caja-efecto1').toggle("slink");
    $('.caja-efecto1').toggle("blind");
    $('.caja-efecto1').toggle("drop");
    $('.caja-efecto1').toggle("puff");
    $('.caja-efecto1').toggle("fold");
    $('.caja-efecto1').toggle("scale", 3000);
    $('.caja-efecto1').toggle("shake");
})
```
## Tooltip

https://www.heteroclito.fr/modules/tooltipster/

```javascript
// tooltip 
$("document").tooltip();
```

## Dialog

```javascript
$('#lanzar_popup').click(function(){
    $('.popup').dialog();
});
```

## DatePicker

```javascript
$("#calendario").datepicker();
```

## Tabs

```javascript
$('#pestanas').tabs();
```