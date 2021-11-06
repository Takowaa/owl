$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 1,
        loop: true,
        autoplay: false,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],

    });
});


$('.mobile_menu').on('click', function(e) {
    e.preventDefault();
    $('.menu_btn').toggleClass('menu_active');
    $('.menu_wrap').toggleClass('menu_active');

});