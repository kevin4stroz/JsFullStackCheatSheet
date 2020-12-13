[VOLVER AL INDICE](../../README.md)

# Primeros pasos TypeScript

Superset de javascript desarrollado por microsoft, que extiende las funcionabilidades de javascript, permite realizar operaciones de programacion orientada a objetos, caracteristicas fuertemente tipado y variables estaticas.

- Introduccion
- Objetos Json
- Entorno de desarrollo (terminal de comandos)
- primeros pasos con TS

- variables y tipado
- programacion orientada a objetos
- clases, metodos y propiedades
- constructores, interfaces y herencia
- Decoradores (angular)

# TypeScript y programacion orientada a objetos

**POO : Paradigma de programacion**

**TypeScript:**

- 85% Javascript normal
- Novedades de los nuevos estandares
- Tipado fuerte
- Desarrollado por microsoft

# Objetos con JSON

```javascript
var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velocidad: "60KM",
    cambiarColor: function(nuevo_color){
        this.color = nuevo_color;
    }
}

console.log(bicicleta);

bicicleta.cambiarColor('Verde');

console.log(bicicleta);

```

# Que es typescript

Superset desarrollado por microsoft, este lenguaje es el lenguaje que se usa dentro de angular, Se le han añadido nuevas funcionabilidades, se le añade todas las funcionabilidades ECMAscriot6, hace la conversion de codigo javascript a uncodigo interpretado por todos los navegadores. es un lenguaje interpretado y que se transpila o se traduce a javascript, tienen las extencion .ts

# instalacion de typescript

1. instalar node.js
2. npm install -g typescript

# Hola mundo tyoescript

escribir el codigo fuente de javascript

```typescript
console.log("hola mundo con typescript");
alert("hola mundo");
```

Compilar codigo, nos generara un archivo js que podremos utilizar en el navegador

```
tsc hola_mundo.ts
```

insercion del codigo javascript generado

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="hola_mundo.js"></script>
    </head>
    <body>
    
    </body>
</html>
```

# Compilacion y transpilacion automatica

compilacion de manera automatica

```
tsc -w *.ts
```
