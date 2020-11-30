[VOLVER AL INDICE](../../README.md)

# Tipo de datos y operadores

# Operadores

## operaciones de asignacion

```javascript
operacion += num1;
operacion -= num1;
operacion *= num1;
operacion /= num1;
operacion %= num1;
operacion **= num1;
operacion <<= num1;
operacion >>= num1;
operacion >>>= num1; // desplazamiento a la derecha sin signo
operacion &= num1; 
operacion ^= num1;
operacion |= num1;
operacion &&= num1; // x && (x = y)
operacion ||= num1; // x || (x = y)
operacion ??= num1; // x ?? (x = y)
```

## sin desestructurar

```javascript
var foo = ['one', 'two', 'three'];

// sin desestructurar
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;
```

## operadores de comparacion

```javascript
operacion = num1 == num2;
operacion = num1 != num2;
operacion = num1 === num2; // estrictamente igual
operacion = num1 !== num2; // estrictamente diferente
operacion = num1 < num2;
operacion = num1 <= num2;
operacion = num1 > num2;
operacion = num1 >= num2;
```

## operadores logicos

```javascript
operacion = true && true;
operacion = false || false;
operacion = !true 
```

## operadores de concatenacion

```javascript
var string_result = "hola" + " prueba";
```

## operador ternario 

```javascript
var age = 20;
var result = (age >= 18) ? 'adult' : 'minor';
```

## operadores uniarios

#### delete

```javascript
var diccionario = { 'name':'kevin' };
delete diccionario.name;                // operador borra una propiedad de un objeto
console.log(diccionario);
```

#### typeof

```javascript
var tipo_dato = typeof diccionario;     // operador devuelve que tipo de dato es una variable
console.log(tipo_dato);
```

#### propiedad in objeto

```javascript
diccionario['nombre'] = 'kevin';
console.log('nombre' in diccionario);   // comprueba si existe una propiedad en un objeto
```

#### instanceof

```javascript
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {           // verifica que una variable sea un tipo especifico
	console.log("si es una fecha");
}
```

# Tipo de datos

## undefined

```javascript
    console.log(typeof var_no_creada); 
```

## boolean

```javascript
    var booleana = true;
    console.log(typeof booleana)
```

## number

```javascript
    var numero_falso = "44" ;
    var conversion = Number(numero_falso);
    conversion = parseInt(numero_falso);
    conversion = parseFloat(numero_falso);


    console.log(typeof conversion);
```

## string

```javascript
var str_variable = "hola";
console.log(typeof str_variable);

var numero = 222;
var Strnumero = String(numero);
```

## bigint

```javascript
var alsoHuge = BigInt(9007199254740991)
console.log(typeof alsoHuge);
```

## symbol

```javascript
const foo = Symbol('foo');
console.log(typeof foo);
```

## function

```javascript
function aa(){
	console.log("aa");
}

console.log(typeof aa);
```

## object

```javascript
var obj_var = { 'nombre':'kevin'};
console.log(typeof obj_var);
```