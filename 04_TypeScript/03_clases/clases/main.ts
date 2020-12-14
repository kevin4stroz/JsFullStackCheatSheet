import {Camiseta} from './camiseta';

class Main{
    constructor() {
        console.log("aplicacion js Cargada!!")
    }

    getCamiseta(){
        return new Camiseta('amarillo','modelo','marca', 'l', 3.3);
    }
}

var main = new Main();
var objCamiseta = main.getCamiseta();

console.log(objCamiseta);