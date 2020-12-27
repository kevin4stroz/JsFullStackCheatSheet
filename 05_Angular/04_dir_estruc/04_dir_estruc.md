[VOLVER AL INDICE](../../README.md)

# Directivas estructurales

pequeña funcionabilidad que vamos a tener en nuestras vistas, estrcuturas de control, condicionales, bucles, condiciones con atributos , eventos y databind, son nuevas etiquetas para vistas.

# ngIf (condicional en la parte de la vista)

```html
<div [ngStyle]="{
    'background-color' : '#eee',
    'border' : '5px solid red',
    'padding' : '20px'
}">


    <h1>Listado de zapatillas</h1>
    <ul>
        <li *ngFor = "let tennis of zapatillas">
            {{tennis.nombre}} - <strong>{{tennis.precio}}</strong>

            <span 
                *ngIf="tennis.precio <= 50" 
                [style.background]="tennis.precio <= 50 ? 'green' : 'transparent'"
                [style.color]="tennis.precio <= 50 ? 'white' : 'black'"
            > ¡OFERTA! </span>
        </li>
    </ul>
</div>
```

# ngFor (ciclo for en la parte de la vista)

```html
<div [ngStyle]="{
    'background-color' : '#eee',
    'border' : '5px solid red',
    'padding' : '20px'
}">

    <h1>Compra las zapatillas de las mejores marcas</h1>
    <ul>
        <li *ngFor = "let marca of marcas; let indice = index">
            {{indice + ' ' + marca}}
        </li>
    </ul>

    <h1>Zapatillas disponibles</h1>
    <ul>
        <li *ngFor = "let tennis of zapatillas">

                <span [ngStyle]="{
                    'text-decoration': !tennis.stock ? 'line-through' : 'none'
                }">
                    {{tennis.nombre}} - <strong>{{tennis.precio}}</strong>
                </span>

                <span 
                    *ngIf="tennis.precio <= 50" 
                    [style.background]="tennis.precio <= 50 ? 'green' : 'transparent'"
                    [style.color]="tennis.precio <= 50 ? 'white' : 'black'"
                > ¡OFERTA! </span>
        </li>
    </ul>
</div>
```

# ngSwitch

```html
<p>El color de la mayoria de las zapatillas es</p>
<ul [ngSwitch]="color">
    <li *ngSwitchCase="'yellow'">
        El color es <span [ngStyle]="{'background-color':color}">amarrillo</span>
    </li>
    <li *ngSwitchCase="'red'">
        El color es <span [ngStyle]="{'background-color':color}">rojo</span>
    </li>
    <li *ngSwitchCase="'blue'">
        El color es <span [ngStyle]="{'background-color':color}">azul</span>
    </li>
</ul>
```



