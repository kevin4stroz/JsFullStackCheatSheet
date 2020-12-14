"use strict";
exports.__esModule = true;
exports.Camiseta = void 0;
var Camiseta = /** @class */ (function () {
    // constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        // propiedades
        this.color = "defecto";
        this.modelo = "defecto";
        this.marca = "defecto";
        this.talla = "defecto";
        this.precio = 0.0;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // metodos
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
