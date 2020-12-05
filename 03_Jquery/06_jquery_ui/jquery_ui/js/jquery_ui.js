'use strict'

$(document).ready(function () {

    // mover elementos por la pagina
    $('.elemento').draggable();

    // redimencionar elemento
    $('.elemento').resizable();

    // seleccionar un elemento
    //$('.lista_seleccionable').selectable();

    // ordenar elementos
    $('.lista_seleccionable').sortable({
        update:function(event, ui){
            console.log("ha cambiado la lista")
        }
    });

    // arrastrar y soltar
    $('#movible').draggable()
    $('#area').droppable({
        drop:function(){
            console.log("Se suelta elemento en al area")
        }
    });

    // efectos

    $("#mostrar").click(function(){
        $('.caja-efecto1').toggle("explode");
        $('.caja-efecto1').toggle("slide");
        $('.caja-efecto1').toggle("slink");
        $('.caja-efecto1').toggle("blind");
        $('.caja-efecto1').toggle("drop");
        $('.caja-efecto1').toggle("puff");
        $('.caja-efecto1').toggle("fold");
        $('.caja-efecto1').toggle("scale", 3000);
        $('.caja-efecto1').toggle("shake");
    })

    // tooltip https://www.heteroclito.fr/modules/tooltipster/
    $("document").tooltip();

    // dialog
    $('#lanzar_popup').click(function(){
        $('.popup').dialog();
    });

    // datepicker
    $("#calendario").datepicker();

    // tabs
    $('#pestanas').tabs();
});