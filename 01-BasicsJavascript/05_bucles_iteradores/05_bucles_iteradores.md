[VOLVER AL INDICE](../../README.md)

# Bucles y iteradores

## for

```javascript
var i;
var text = "";
var cars = ["bmw", "toyota", "prado"];
for (i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

console.log(text);
```

```html
<form name="selectForm">
  <p>
    <label for="musicTypes">Elija algunos tipos de música, luego haga clic en el botón de abajo:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="¿Cuántos están seleccionados?" /></p>
</form>

<script>
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Número de opciones seleccionadas: ' + howMany(document.selectForm.musicTypes));
});
</script>
```

## do while

```javascript
var i = 0;
do {
  text += " -- The number is " + i;
  i++;
}
while (i < 10);
```

## while

```javascript
var i = 0;
let n = 0;

while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}
//1,3,7,12
```

## for in

```javascript
function dump_props(obj, obj_name) {
    let result = '';

    for (let i in obj) {
        result += obj_name + '.' + i + ' = ' + obj[i] + ' -- ';
    }

    result += ' -- ';
    return result;
}

carro = {
    'marca': 'mercedes',
    'color': 'green'
}

console.log(dump_props(carro, "carro"));
```

## for off

```javascript
const arr = [3, 5, 7];
arr.foo = 'hola';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```