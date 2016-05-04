$(document).ready(function(){
  $('.mobile-nav-button,.mobile-nav-fade-screen,.mobile-nav-close').on('click touchstart',function (e) {
    $('.mobile-nav-content,.mobile-nav-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});
