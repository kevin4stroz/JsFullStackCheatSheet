[VOLVER AL INDICE](../../README.md)

# Primeros pasos JQUERY

Libreria de javascript que brindara una gran cantidad de funcionabilidades desarrolladas, efectos, peticiones ajax, compatibilidad navegadores, reduccion del codigo puro en javascript, pluggins de manera mucho mas sencilla, jquery gui. Se usan en proyectos monoliticos. y el backend separado del front end (web spa).

# Integrar jquery

Descargar jquery y agregarlo https://code.jquery.com/jquery-3.5.1.min.js al html

```html
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/primeros_pasos.js"></script>
```

Comprobarlo

```javascript
$(document).ready(()=>{
    console.log("web y jquery cargado");
});
```

# Versiones

- Version 1 : compatible con internet explorer 6 7 8, era muy pesada por el soporte a todos los navegadores antiguas

- Version 2 :  se quito el soporte a 6 7 8. y mejor el rendimiento

- Version 3 : nuevos metodos, compatibles con html5 y soporte a promises