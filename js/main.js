$(function () {
    $('.portfolio__slider').slick({
        arrows: false,
    })

    $('.portfolio__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.portfolio__slider').slick('slickPrev')
    })

    $('.portfolio__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.portfolio__slider').slick('slickNext')
    })

    $('.news-contents').slick({
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.news__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.news-contents').slick('slickPrev')
    })

    $('.news__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.news-contents').slick('slickNext')
    })

    $('.news__slider-prev-mob').on('click', function (e) {
        e.preventDefault()
        $('.news-contents').slick('slickPrev')
    })

    $('.news__slider-next-mob').on('click', function (e) {
        e.preventDefault()
        $('.news-contents').slick('slickNext')
    })

})

