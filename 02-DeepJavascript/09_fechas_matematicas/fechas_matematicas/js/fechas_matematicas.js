'use strict'

window.addEventListener('load', ()=>{
    var fecha = new Date();
    console.log(fecha);

    var dia = fecha.getDay();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();

    var texto = `
        año : ${year}
        mes : ${mes}
        dia : ${dia}
    `;

    console.log(texto);

    var x = Math.PI
    console.log(x)

    var y = Math.random();
    console.log(y)

    var z = Math.ceil(Math.random()*10000);
    console.log(z)
})