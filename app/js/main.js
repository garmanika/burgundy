$(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-l.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-r.svg" alt=""></button>',
        // autoplay: true,
        slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows:false,
                dots:true,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                dots:true,
                arrows:false,
                slidesToScroll: 1
              }
            }
          ]
        
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });


});