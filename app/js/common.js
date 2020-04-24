$(function() {



// menu mobile 

$('.menu__icon').click(function () {
    $('.menu__content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.menu__content').removeAttr('style');
    }
});



// open close serch

$('#serch').fadeOut();

var gool = 0;
                    
$('#serch__icon').on('click', function () {
    if (gool == 0) {
        $('#serch').fadeIn();
        gool = 1;
    }
    else {			
        $('#serch').fadeOut();
        gool = 0;
    }
});

// slider

$('.slider').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
});




});


