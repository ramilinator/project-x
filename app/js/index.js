var viewPortHeight = $(window).innerHeight();
var viewPortWidth = $(window).innerWidth();
var stickyNav = 60;
var mobile = 1024;
var viewPortMobile = viewPortHeight;
var viewPortDesktop = viewPortHeight - stickyNav;

 
$(document).ready(function() { 

  if (viewPortWidth <= mobile){
   $('.landing-page').css('height', viewPortMobile);
 } 
 else {
   $('.landing-page').css('height', viewPortDesktop);
   
 }

 $(window).scroll(function() { 

  var winTop = $(window).scrollTop();

  if (viewPortWidth > mobile) {
    if (winTop >= viewPortDesktop){
      $(".main-nav").addClass("sticky-nav");
      $(".wrapper").addClass("addPad");
    } else {
      $(".main-nav").removeClass("sticky-nav");
      $(".wrapper").removeClass("addPad");
    }
  } 
})

 $(".menu-link").click(function(e) {
  e.preventDefault();
  $(".menu").toggleClass("open");
  $(".dimmer").toggleClass("active");
});

});



