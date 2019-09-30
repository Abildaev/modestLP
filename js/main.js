$(document).ready(function () {


     $('.header__hamburger_trigger').on('click', function (){

          $('.header__nav').toggleClass('is-active');
          $('.header__hamburger_trigger > span').toggleClass('is-active');
     });

     $('a[href^="#"]').click(function(){
          var target = $(this).attr("href");
          $("html, body").animate({
              scrollTop: $(target).offset().top-50
          }, 1000)

     });

     var Slider = {
          slideIndex: 1,      
          showSlides: function(n = 1) {
            var slides = $('.mySlides');
            var dots = $('.dot');
      
            if(n < 1) {
              this.slideIndex = slides.length;
            }
            if (n > slides.length) {
              this.slideIndex = 1;
            }
      
            slides.css('display', 'none');
            dots.removeClass('active');
      
            $(slides[this.slideIndex - 1]).css('display', 'block');
            $(dots[this.slideIndex - 1]).addClass('active');
          },
      
          currentSlide: function () {
            var dots = $('.dot');
            var self = this;
      
            dots.on('click', function () {
              self.showSlides(self.slideIndex = $(this).index() + 1);
            });
          },
          play: function () {
            setInterval( () => {
              this.showSlides(this.slideIndex += 1);
            }, 5000);
          },
          init: function () {
            this.showSlides();
            this.currentSlide();
            this.play();
          }
        };
      
        Slider.init();
});



 