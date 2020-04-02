// Slider
$(document).ready(function(){
  // Slide Next
   $('.next').click(
       nextImg
   );
  // Slide Prev
   $('.prev').click(
       prevImg
   );

   $('.menu-icons i').click(
     onBall
   );

  function nextImg() {
     var imgActive = $('.collections img.active');
     imgActive.removeClass('active');
     var navBallActive = $('.menu-icons i.active');
     navBallActive.removeClass('active');

     if(imgActive.hasClass('last')){
       $('.collections img.first').addClass('active');
       $('.menu-icons i.first').addClass('active');
     } else {
       imgActive.next().addClass('active');
       navBallActive.next().addClass('active');
   }
  }

  function prevImg() {
    var imgActive = $('.collections img.active');
    imgActive.removeClass('active');
    var navBallActive = $('.menu-icons i.active');
    navBallActive.removeClass('active');

    if(imgActive.hasClass('first')){
      $('.collections img.last').addClass('active');
      $('.menu-icons i.last').addClass('active');
    } else {
      imgActive.prev().addClass('active');
      navBallActive.prev().addClass('active');
    }
  }

  function onBall(){
    var clickBallActive = $('.menu-icons i.active');
    clickBallActive.removeClass('active');

    if (clickBallActive.hasClass('active')) {
      $('.collections img.active').next().addClass('active');
      (this).next().addClass('active');
    } else {
      imgActive.next().addClass('active');
      clickBallActive.next().addClass('active');
    }
  }

});
