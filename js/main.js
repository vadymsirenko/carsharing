$(document).ready(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    });
}); 

$(document).ready(function(){
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}); 

$(document).ready(function(){
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.phone').toggleClass('phone--active');
    });

    $('.menu__item').on('click', function(){
        $('.menu__list').removeClass('menu__list--active');
        $('.phone').removeClass('phone--active');
    });

});

$(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});