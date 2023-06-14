$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
         
        },
        1000:{
            items:4,
        }
			
        }
    }
)

  $("#sign").click(function(){
  $(this).animate({opacity: '.7'}, "fast");
  $(this).animate({opacity: '1'}, "fast");
});

    
     
});
