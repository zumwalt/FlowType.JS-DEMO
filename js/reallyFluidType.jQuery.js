(function($) {
   $.fn.reallyFluidType = function( options ) {

      // Set on page load

      var $element = $(this);
      var $width = $(window).width();
      var $fontSize = $width / 35;
      var $lineHeight = $fontSize * 1.45;

      function changes() {
         $element.css({
            'font-size':$fontSize + 'px',
            'line-height':$lineHeight + 'px'
         });
      }

      changes();

      // Update on resize
      $(window).resize(function(){

         var $width = $(window).width();
         var $fontSize = $width / 35;
         var $lineHeight = $fontSize * 1.45;

         function changes() {
            $element.css({
               'font-size':$fontSize + 'px',
               'line-height':$lineHeight + 'px'
            });
         }

         changes();
      });
      
   };
}(jQuery));