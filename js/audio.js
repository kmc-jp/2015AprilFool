$(function(){
  if(!HTMLAudioElement){
    $('#audioControll').remove();
  }
  $('#audioControll').on('click', function(){
    var audio = document.getElementById("bgmAudio");
    if($(this).is('.play')){
      audio.play();
      $(this).val('£Â£Ç£Í¤ò»ß¤á¤ë')
    }else{
      audio.pause();
      $(this).val('£Â£Ç£Í¤òÌÄ¤é¤¹');
    }
    $(this).toggleClass("play");
  })
})
