[VOLVER AL INDICE](../../README.md)

# BOM

como puedo yo trabajar con lo elementos del navegador, tamaño del size del navegador, redirecciones , etc

## tamaño del navegador

```javascript
console.log("altura:",window.innerHeight);
console.log("anchura:",window.innerWidth);
```

## tamaño con screen

```javascript
console.log("altura:",screen.height);
console.log("anchura:",screen.width);
```

## Obtener url actual

```javascript
console.log("url :",window.location);
```

## Redireccion

```javascript
window.location.href = "http://www.google.com";
```

## Abrir una nueva url

```javascript
window.open("http://www.google.com", "", "width=400,heigth=300");
```