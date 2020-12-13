
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

