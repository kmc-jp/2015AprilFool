$(function(){

  var clientX = 0;
  var clientY = 0;

  var picX = 0;
  var picY = 0;

  $(window).mousemove(function(e){
      clientX = e.clientX;
      clientY = e.clientY;
  });

  setInterval(function(){
    picY = picY + (clientY + 10 - picY) / 30;
    picX = picX + (clientX + 10 - picX) / 30;
    $("#kmc_mouse").css({
      top: picY ,
      left: picX ,
    });
  },8);


});
