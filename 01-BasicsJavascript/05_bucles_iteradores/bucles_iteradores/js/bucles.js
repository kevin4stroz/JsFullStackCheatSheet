'use strict'

alert("bucles");

// for
var i;
var text = "";
var cars = ["bmw", "toyota", "prado"];
for (i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

console.log(text);

// do while
i = 0;
do {
  text += " -- The number is " + i;
  i++;
}
while (i < 10);

// while
i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}

// for in
function dump_props(obj, obj_name) {
    let result = '';
  
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + ' -- ';
    }
  
    result += ' -- ';
    return result;
}
  
var carro = {
      'marca': 'mercedes',
      'color': 'green'
}
  
console.log(dump_props(carro, "carro"));

// for of
const arr = [3, 5, 7];
arr.foo = 'hola';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}