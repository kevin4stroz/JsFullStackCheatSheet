"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("aplicacion js Cargada!!");
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta('amarillo', 'modelo', 'marca', 'l', 3.3);
    };
    return Main;
}());
var main = new Main();
var objCamiseta = main.getCamiseta();
