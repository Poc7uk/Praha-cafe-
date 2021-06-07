$('.carousel__one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel__two'
  });
  $('.carousel__two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel__one',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });



//   <!-- Для слайду на всю сторінку -->

$(function() {
$.scrollify({
    section : ".anchor"
});
});     


//   <!-- Для плавного слайду по якорям -->

$(document).ready(function(){
    $("#main").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

