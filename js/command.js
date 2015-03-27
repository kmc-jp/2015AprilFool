$(function(){
  Mousetrap.bind('up up down down left right left right b a enter', function() {
    $("#kmc_mouse").attr("src", "/img/konami_mode.gif");
  });
})
