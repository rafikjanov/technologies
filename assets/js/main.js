$(document).ready(function () {
    $(".js-open-popup").on("click", function() {
        $("#pop-up").addClass("open")
    });
    $(".js-open-popup-2").on("click", function() {
        $("#pop-up-2").addClass("open ")
    });

    $(".js-open-popup-sent").on("click", function() {
        $("#pop-up").addClass("active")
        $("#pop-up-2").addClass("active")
        $("#pop-up-3").addClass("active")
    });

    $(".js-close-popup").on("click", function() {
        $("#pop-up").removeClass("open active")
        $("#pop-up-2").removeClass("open active")
        $("#pop-up-3").removeClass("open active")
    });

    $(".js-addClass").on("click", function() {
        $(this).addClass("active")
        $(".js-removeClass").removeClass("active")
    });

    $(".js-addClass-2").on("click", function() {
        $(this).addClass("active")
        $(".js-removeClass-2").removeClass("active")
    });


    $(".js-open-popup-3").on("click", function() {
        $("#pop-up-3").addClass("open ")
    });

    $( ".js-hover" ).mouseover(function() {
        $(".js-push").addClass("active");
    });
    $( ".js-hover" ).mouseout(function() {
        $(".js-push").removeClass("active");
    });

    $(".js-hover-2" ).mouseover(function() {
        $(".js-push-2").addClass("active");
    });
    $( ".js-hover-2" ).mouseout(function() {
        $(".js-push-2").removeClass("active");
    });

    $("#fap-slider").owlCarousel({
        loop:true,
        nav:true
    });

    $('#reviews').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:10000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#certificate').owlCarousel({
        loop:true,
        nav:true,
        margin: 15,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });



});