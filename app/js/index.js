
var viewPort = $(window).height();
var stickyNav = 60;
var stickyNavActivate = viewPort - stickyNav;

$(document).ready(function() {
	
	$(".landing-page").css('height', stickyNavActivate);
 
  	$(window).scroll(function() { 

    var winTop = $(window).scrollTop();

    if (winTop >= stickyNavActivate){
      $("body").addClass("sticky-nav");
    } 
    else {
      $("body").removeClass("sticky-nav");
    }
  })
})

