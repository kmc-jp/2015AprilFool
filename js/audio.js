$(function(){
  if(!HTMLAudioElement){
    $('#audioControll').remove();
  }
  $('#audioControll').on('click', function(){
    var audio = document.getElementById("bgmAudio");
    if($(this).is('.play')){
      audio.play();
      $(this).val('ＢＧＭを止める')
    }else{
      audio.pause();
      $(this).val('ＢＧＭを鳴らす');
    }
    $(this).toggleClass("play");
  })
})
