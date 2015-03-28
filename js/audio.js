$(function(){
  if(!HTMLAudioElement){
    $('#audioControll').remove();
  }
  $('#audioControll').on('click', function(){
    var audio = document.getElementById("bgmAudio");
    if($(this).is('.play')){
      audio.play();
      $(this).val('BGMを止める')
    }else{
      audio.pause();
      $(this).val('BGMを鳴らす');
    }
    $(this).toggleClass("play");
  })
})
