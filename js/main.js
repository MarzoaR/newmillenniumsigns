document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
  // ======================= Scroll =======================
  var scroll = document.querySelectorAll('.scrollspy');
  var instance = M.ScrollSpy.init(scroll, {
    throttle:2000,
    scrollOffset:0
    
  });
  new WOW().init();
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