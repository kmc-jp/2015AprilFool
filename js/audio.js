$(function(){
  if(!HTMLAudioElement){
    $('#audioControll').remove();
  }
  $('#audioControll').on('click', function(){
    var audio = document.getElementById("bgmAudio");
    if($(this).is('.play')){
      audio.play();
      $(this).val('�£ǣͤ�ߤ��')
    }else{
      audio.pause();
      $(this).val('�£ǣͤ��Ĥ餹');
    }
    $(this).toggleClass("play");
  })
})
