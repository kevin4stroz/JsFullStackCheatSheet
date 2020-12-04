'use strict'

$(document).ready(()=>{

    // seleccionar id rojo
    var rojo = $("#rojo");
    rojo.css("background", "red");

    // seleccionar id verde
    $("#verde").css("background", "lime")
               .css("color", "purple");

    // seleccionar id amarillo
    $("#amarillo").css("background", "yellow")
              .css("color", "blue");

    // seleecionar clase zebra
    var zebra = $('.zebra').css('padding','5px');

    // indices y obtener elementos
    console.log(zebra);
    console.log(zebra[0]);
    console.log(zebra.eq(1));   // es mejor asi por que hereda los metodos jquery

    $('.sin_borde').click(function(){
        console.log("click")
        $(this).addClass('zebra')
    })

    // seleccionar parrafos
    $('p').click(function(){
        var _this = $(this)
        if(!_this.hasClass('grande')){
            _this.addClass("grande");
        }else{
            _this.removeClass('grande');
        }
    }).css("cursor","pointer");

    // selectores de atributos
    $('[title="Google"]').css("background","#ccc");
    $('[title="facebook"]').css("background","blue");

    // find  y parent
    $('p, a').addClass("margensuperior");
    var encontrado = $('#caja').find('.resaltado');
    console.log(encontrado);

    // salir del objeto donde estas
    var li = encontrado.eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(li);
})