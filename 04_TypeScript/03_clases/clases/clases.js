var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// clase public
var Clases = /** @class */ (function () {
    function Clases() {
        // propiedades
        this.color = "defecto";
        this.modelo = "defecto";
        this.marca = "defecto";
        this.talla = "defecto";
        this.precio = 0.0;
        // metodos
    }
    return Clases;
}());
var camiseta = new Clases();
console.log(camiseta);
camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.marca = "nike";
camiseta.talla = "L";
camiseta.precio = 10.0;
console.log(camiseta);
// clase private
var Clase2 = /** @class */ (function () {
    // constructor
    function Clase2(color, modelo, marca, talla, precio) {
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
    Clase2.prototype.getColor = function () {
        return this.color;
    };
    Clase2.prototype.setColor = function (color) {
        this.color = color;
    };
    return Clase2;
}());
var objeto2 = new Clase2('rojo', 'manga corta', 'nike', 'L', 20.0);
objeto2.setColor("azul");
console.log(objeto2.getColor());
console.log(objeto2);
// clase private
var Clase3 = /** @class */ (function () {
    // constructor
    function Clase3(color, modelo, marca, talla, precio) {
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
    Clase3.prototype.getColor = function () {
        return this.color;
    };
    Clase3.prototype.setColor = function (color) {
        this.color = color;
    };
    return Clase3;
}());
// herencia
var Hija = /** @class */ (function (_super) {
    __extends(Hija, _super);
    function Hija() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capucha = true;
        return _this;
    }
    Hija.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Hija.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Hija;
}(Clase2));
var hijaObj = new Hija('w', 'w', 'w', 'w', 11);
console.log(hijaObj);
// decoradores : patron de desiño que nos permite mediente
// unos metados que se le definen a una clase, hacer una copia
// a esa clase, y que en funcion a los parametros que recibe esa clase
// realice una o otra accion
// un decorador lo que hace es agregar una funcionabilidad a una clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de :" + logo);
        };
    };
}
var Nueva = /** @class */ (function () {
    // constructor
    function Nueva(color, modelo, marca, talla, precio) {
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
    Nueva.prototype.getColor = function () {
        return this.color;
    };
    Nueva.prototype.setColor = function (color) {
        this.color = color;
    };
    Nueva = __decorate([
        estampar('Nike')
    ], Nueva);
    return Nueva;
}());
var Deco = new Nueva('s', 's', 's', 's', 44);
Deco.estampacion();
