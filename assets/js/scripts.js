$(function(){

    // AOS.init({
    //     once: true,
    // });

    AOS.init();

    $('#nav-icon4').click(function(){
        $(".header").toggleClass('open');
        $('.mainMenu').toggleClass('activeMenu');
      });

      



});
    
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.mobileSlider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } 
   






