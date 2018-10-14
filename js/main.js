document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
  // ======================= Scroll =======================
  var scroll = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(scroll, {
    scrollOffset:0,
    throttle: 200
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