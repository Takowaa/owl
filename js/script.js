$(document).ready(function() {
    $(".slide_one").owlCarousel({
        nav: true,
        items: 1,
        loop: true,
        autoplay: false,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],

    });
    $(".slide_two").owlCarousel({
        loop: true, //Зацикливаем слайдер
        items: 1,
        nav: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],


    });
    $(".slide_three").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 40, //Отступ от картино если выводите больше 1
        nav: false, //Отключил навигацию
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});




$('.mobile_menu').on('click', function(e) {
    e.preventDefault();
    $('.menu_btn').toggleClass('menu_active');
    $('.menu_wrap').toggleClass('menu_active');
    $('body').toggleClass('hidden')

});


$('.menu a').on('click', function(e) {
    console.log(123);

    $('.menu_btn').removeClass('menu_active');
    $('.menu_wrap').removeClass('menu_active');
    $('body').removeClass('hidden')

});