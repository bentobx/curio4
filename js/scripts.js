$(document).ready(function(){
  $('.mobile-nav-button,.mobile-nav-fade-screen,.mobile-nav-close').on('click touchstart',function (e) {
    $('.mobile-nav-content,.mobile-nav-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.spoiler-content').bind('click', function(e){
    $(this).parents().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    $(this).parents().toggleClass('is-expanded');
    e.preventDefault();
  });
});
