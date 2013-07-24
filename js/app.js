$(window).ready(function(){
   $width = $(window).width();
   $fontSize = $width / 35;
   $lineHeight = $fontSize * 1.45; 
   $('body').css({
      'font-size':$fontSize + 'px',
      'line-height':$lineHeight + 'px'
   });
});

$(window).resize(function(){
   $width = $(window).width();
   $fontSize = $width / 35;
   $lineHeight = $fontSize * 1.45; 
   $('body').css({
      'font-size':$fontSize + 'px',
      'line-height':$lineHeight + 'px'
   });
});