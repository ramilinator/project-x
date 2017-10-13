var viewPortHeight = $(window).innerHeight();
var viewPortWidth = $(window).innerWidth();
var stickyNav = 60;
var mobile = 600;
var viewPortMobile = viewPortHeight;
var viewPortDesktop = viewPortHeight - stickyNav;


$(document).ready(function() {
  	$(window).on( "load", function() { 

    if (viewPortWidth <= mobile){
     $(".landing-page").css('height', viewPortMobile);
    } 
    else {
     $(".landing-page").css('height', viewPortDesktop);
    }
  });
  $(window).scroll(function() { 

    var winTop = $(window).scrollTop();

    if (winTop >= viewPortDesktop){
      $("body").addClass("sticky-nav");
    } 
    else {
      $("body").removeClass("sticky-nav");
    }
  })
})



