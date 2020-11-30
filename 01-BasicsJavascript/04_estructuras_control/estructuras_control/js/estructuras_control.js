'use strict'

// if
if( 22 > 30){
    console.log("22 es mayor que 30");
}

// if/else
var a = 22;
var b = 30;

if(a>b){
    console.log(a + " es mayor que " + b);
}else{
    console.log(a + " es mayor que " + b);
}

// elseif
var menu = "menu1";

if(menu == "menu"){
    console.log("has escogido menu");
}
else if(menu == "menu1"){
    console.log("has escogido menu1");
}
else if(menu == "menu2"){
    console.log("has escogido menu2");
}
else{
    console.log("no se reconoce el menu");
}

// switch
var opcion = "opcion1"
switch (opcion) {
    case "opcion":
        console.log("has escogido la opcion");
        break;

    case "opcion1":
        console.log("has escogido la opcion1");
        break;

    case "opcion2":
        console.log("has escogido la opcion2");
        break;

    default:
        console.log("no se reconoce la opcion");
        break;
}