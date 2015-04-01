$(function(){

  var marquee_attribute = ["width","behavior","behavior","behavior","behavior","direction","direction"];
  var marquee_value = ["70%","scroll","alternate","alternate","slide","right","right"];
  var rainbow = ["red","orange","gold","green","skyblue","blue","purple"];


  $("marquee").each(function(){
    var i = Math.floor( Math.random() * marquee_attribute.length );
    $(this).attr(marquee_attribute[i],marquee_value[i]);
    i = Math.floor( Math.random() * marquee_attribute.length );
    $(this).attr(marquee_attribute[i],marquee_value[i]);
    i = Math.floor( Math.random() * 70 );
    $(this).attr("scrollamount", i);
  })

  $('h1').children().addBack().contents().each(function() {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  })
  $('h2').children().addBack().contents().each(function() {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  })
  $('h3').children().addBack().contents().each(function() {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  })
  $('h4').children().addBack().contents().each(function() {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  })

  $("span").each(function(){
    var i = Math.floor( Math.random() * rainbow.length );
    $(this).css("color",rainbow[i])
  })

})
