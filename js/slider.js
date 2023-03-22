$(document).ready(function() {
    $('.slider').slick({
        speed: 700,
        slidesToShow: 1,
        easing: 'linear',
        infinite: true,
        waitForAnimate: true,
        dots: true,
        arrows: false
    });
});