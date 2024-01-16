(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
  
    
 



document.addEventListener("DOMContentLoaded", () =>{
    function countervalue(id, start, end, duration){
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if(current == end){
             clearInterval(timer);
          }
      }, step);
    }
    countervalue("count1", 0,560,2000);
    countervalue("count2", 100,197,3000);
    countervalue("count3", 0,268,4000);
    countervalue("count4", 0,340,2000);
  });

var siteCarousel = function () {
    if ( $('.nonloop-block-13').length > 0 ) {
        $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true,
            stagePadding: 0,
        margin: 30,
        autoplay: true,
        nav: false,
        responsive:{
        600:{
            margin: 30,
            
          items: 2
        },
        1000:{
            margin: 30,
            stagePadding: 0,
            
          items: 3
        },
        1200:{
            margin: 30,
            stagePadding: 0,
            
          items: 4
        }
        }
        });
    }

    $('.slide-one-item, .with-dots').owlCarousel({
    center: false,
    items: 1,
    loop: true,
        stagePadding: 0,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,
    nav: false,
    dots: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });

  $('.slide-one-item-alt').owlCarousel({
    center: false,
    items: 1,
    loop: true,
        stagePadding: 0,
        smartSpeed: 700,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,

  });

  
  
  $('.custom-prev1').click(function(e) {
      e.preventDefault();
      $('.nonloop-block-13').trigger('prev.owl.carousel');
  });
  $('.custom-next1').click(function(e) {
      e.preventDefault();
      $('.nonloop-block-13').trigger('next.owl.carousel');
  });


  $('.custom-next').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('next.owl.carousel');
  });
  $('.custom-prev').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('prev.owl.carousel');
  });
  
};
siteCarousel();

var siteStellar = function() {
    $(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });
};
  




$('.form-control').each(function () {
    floatedLabel($(this));
});

$('.form-control').on('input', function () {
    floatedLabel($(this));
});

function floatedLabel(input) {
    var $field = input.closest('.form-group');
    if (input.val()) {
        $field.addClass('input-not-empty');
    } else {
        $field.removeClass('input-not-empty');
    }
}

$('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});
$(document).on('click', '.owl-item>div', function(){
    var $speed = 1000;
    $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
  });
  
  
// go to top
$(window).scroll(function(){
	if($(this).scrollTop() > 200) {
		$('.go-top').show();
	} else {
		$('.go-top').hide();
	}
});
$('.go-top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});
})(jQuery);
