$(document).ready(function() {
    $('.slider').slick({
        speed: 800,
        slidesToShow: 1,
        easing: 'linear',
        waitForAnimation: true,
        swipe: false,
        fade: true,
        arrows: false,
        dots: true
    });
});