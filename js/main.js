document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
  // ======================= Scroll =======================
  // var scroll = document.querySelectorAll('.scrollspy');
  // var instance = M.ScrollSpy.init(scroll, {
  //   throttle:2000,
  //   scrollOffset:0
    
  // });
  new WOW().init();



  var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    // ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)
    topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
    // Speed & Easing
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
    easing: 'easeInOutCubic', // Easing pattern to use
    // History
    updateURL: false, // Update the URL on scroll
    popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
    // Custom Events
    emitEvents: true // Emit custom events
    });




});



// ======================= Menu =======================
$(document).ready(function(){
// agregar clases al hacer click sobre el botón de menú
  $('.menu').click(function(){
    $('.menu').toggleClass('active');
    $('.menu-bar').toggleClass('active');
    // $('header').toggleClass('op');
  });
// remover clases al hacer click sobre el botón de menú
  $('section').click(function(){
    $('.menu').removeClass('active');
    $('.menu-bar').removeClass('active');
    // $('header').removeClass('op');
  });

});

// ======================= Formulario de contacto =======================



// ======================= Call to action main =======================
$(window).resize(function(){
  // console.log('resize called');
  var width = $(window).width();
  if(width < 600){
    $('#callto').removeClass('nms-flex-center');
  }else{
    $('#callto').addClass('nms-flex-center');
  }
})
.resize();