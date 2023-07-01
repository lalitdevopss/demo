$('.inr-slider2').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.inr-slider2 .item').each(function () {
    var slideBg = $(this).find('img').attr('src');
    $(this).css({ background: 'url(' + slideBg + ') no-repeat', backgroundSize: 'cover' })
});

$('.new-slider-nxt').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    // fade: true,
    appendArrows: $("#next-prev-nxt"),
    lazyLoad: 'progressive',

    slidesToShow: 1,
    slidesToScroll: 1
})

$('.new-slider-nxt').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(".slick-slide").removeClass('works');
    $('.slick-current').prev().addClass('works');
});

var cloneCaro = $('.tho-caro-wrap').html();
$('.tho-caro2-wrap').html(cloneCaro);
$(".tho-caro2-wrap .txt-cnt:first").detach().insertAfter(".tho-caro2-wrap .txt-cnt:last");

$(document).ready(function () {
    /* Header Banner */

    $('.tho-caro-wrap .tho-caro').slick({
        accessibility: true,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '150px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        fade: true,
        lazyLoad: 'progressive',
        verticalSwiping: false,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.tho-caro2-wrap .tho-caro',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    settings: 'unslick',
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.tho-caro2-wrap .tho-caro').slick({
        accessibility: true,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '150px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: false,
        fade: false,
        lazyLoad: 'progressive',
        verticalSwiping: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        focusOnSelect: true,
        prevArrow: $('.sect10 .qarrow-set .1arrow-prev'),
        nextArrow: $('.sect10 .qarrow-set .1arrow-next'),
        asNavFor: '.tho-caro-wrap .tho-caro',
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3
                },
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                },
                breakpoint: 670,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$('.vid-caro').slick({
    accessibility: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '150px',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    focusOnSelect: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerPadding: '100px',
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '50px',
                arrows: false,
                dots: true

            }
        },
        {
            breakpoint: 480,
            settings: {
                centerPadding: '15px',
                arrows: false,
                dots: true
            }
        }
    ]

});

$('.trendingHome .row').slick({
    infinite: false,
    dots: false,
    autoplay: false,
    arrows: true,
    lazyLoad: 'progressive',
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.overview .qarrow-set .1arrow-prev'),
    nextArrow: $('.overview .qarrow-set .1arrow-next'),
    responsive: [
        {
            breakpoint: 979,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

$('.str-rotate').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.st-brd-cont'
});

$('.st-brd-cont').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.str-rotate'
});

$('.award-caro').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow: $('.qset2 .1arrow-prev'),
    nextArrow: $('.qset2 .1arrow-next'),
    responsive: [


        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$(document).ready(function ($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }
    //Count up code
    function countUp() {
        $('.countr').each(function () {
            var $this = $(this), // <- Don't touch this variable. It's pure magic.
                countTo = $this.attr('data-count');
            ended = $this.attr('ended');

            if (ended != "true" && isScrolledIntoView($this)) {
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2500, //duration of counting
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                $this.attr('ended', 'true');
            }
        });
    }
    //Start animation on page-load
    if (isScrolledIntoView(".countr")) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function () {
        if (isScrolledIntoView(".countr")) {
            countUp();
        }
    });
});