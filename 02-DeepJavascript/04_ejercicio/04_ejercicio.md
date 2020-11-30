[VOLVER AL INDICE](../../README.md)

# Ejercicio primera parte

- crear un formulario que tenga tres campos nombre, apellidos y edad

```html
<form id="formulario" action="#" method="post" onsubmit="return false;"> 
    <fieldset>
        <legend>Datos personales</legend>
                    
        <p>
            <input type="text" id="nombre" name="nombre" />
            <label for="nombre">:NOMBRE</label>
        </p>

        <p>
            <input type="text" id="apellido" name="apellido" />
            <label for="apellido">:APELLIDO</label>
        </p>
                    
        <p>
            <input type="number" id="edad" name="edad" />
            <label for="edad">:EDAD</label>
        </p>

        <p>
            <span id="er_nombre" class="error_show">*Error en el dato nombre</span>
            <span id="er_apellido" class="error_show">*Error en el dato apellido</span>
            <span id="er_edad" class="error_show">*Error en el dato edad</span>
        </p>

        <button type="submit" id="btnForm">Enviame</button>

    </fieldset>
</form>
```
- boton envia formulario que use el evento submit y mostrar esos datos por pantalla y valide si el input esta bien y muestre el error

```javascript
var formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", () =>{
        // mostrando datos por pantalla
        if(nombre.value != "" &&  apellido.value != "" && edad.value != "" && !isNaN(parseInt(edad.value)) && parseInt(edad.value) > 0 ){
            mostrarDiv.style.display = "block";
            span_nombre.innerHTML = nombre.value;
            span_apellido.innerHTML = apellido.value;
            span_edad.innerHTML = edad.value;
        }else{

            if( nombre.value == null || nombre.value.length == 0){
                er_nombre.style.display = "block";
            }

            if( apellido.value == null || apellido.value.length == 0){
                er_apellido.style.display = "block";
            }

            if( edad.value == null || edad.value.length <= 0 || isNaN(parseInt(edad.value)) || parseInt(edad.value) < 0){
                er_edad.style.display = "block";
            }

            var tiempo_view = setTimeout(() => {
                er_edad.style.display = "none";
                er_apellido.style.display = "none";
                er_nombre.style.display = "none";
            }, 7000);
        }
    });
```
- limpiar datos

```javascript
btnDiv.addEventListener("click", ()=>{
    span_nombre.innerHTML = "NONE";
    span_apellido.innerHTML = "NONE";
    span_edad.innerHTML = "0";
    nombre.value = "";
    apellido.value = "";
    edad.value = "";
    mostrarDiv.style.display = "none";
});
```

