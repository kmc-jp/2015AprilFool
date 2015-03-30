$(function(){

  var marquee_tag = ["width","behavior","behavior","behavior","behavior","direction","direction"];
  var marquee_value = ["70%","scroll","alternate","alternate","slide","right","right"];
  var rainbow = ["red","orange","gold","green","skyblue","blue","purple"];


  $("marquee").each(function(){
    var i = Math.floor( Math.random() * marquee_tag.length );
    $(this).attr(marquee_tag[i],marquee_value[i]);
    i = Math.floor( Math.random() * marquee_tag.length );
    $(this).attr(marquee_tag[i],marquee_value[i]);
    i = Math.floor( Math.random() * 70 );
    $(this).attr("scrollamount", i);
  })

  $('h2').children().addBack().contents().each(function() {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  })

  $("span").each(function(){
    var i = Math.floor( Math.random() * rainbow.length );
    $(this).css("color",rainbow[i])
  })

})
