/*   
* FlowType.JS 1.0
* Copyright 2013, John Wilson http://j-wilson.com/
* July 2013
*/

(function($) {
   $.fn.flowtype = function( options ) {

   // Establish default settings
      var settings = $.extend({
         maximum   : 1800,
         minimum   : 550,
         fontRatio : 35,
         lineRatio : 1.45
      }, options);
      var $element = $(this);


// Set on page load
// ================

   // Set max and min thresholds
      if ( $element.width() > settings.maximum ) {
         var $width = settings.maximum;
      } else if ( $element.width() < settings.minimum ) {
         var $width = settings.minimum;
      } else {
         var $width = $element.width();
      }

   // Do the math
      var $fontSize = $width / settings.fontRatio;
      var $lineHeight = $fontSize * settings.lineRatio;

   // Make CSS "changes"
      function changes() {
         $element.css({
            'font-size':$fontSize + 'px',
            'line-height':$lineHeight + 'px'
         });
      }

   // Run CSS "changes"
      changes();



// Update on resize
// ================
      $(window).resize(function() {

      // Set max and min thresholds
         if ( $element.width() > settings.maximum ) {
            var $width = settings.maximum;
         } else if ( $element.width() < settings.minimum ) {
            var $width = settings.minimum;
         } else {
            var $width = $element.width();
         }

      // Do the math
         var $fontSize = $width / settings.fontRatio;
         var $lineHeight = $fontSize * settings.lineRatio;

      // Make CSS "changes"
         function changes() {
            $element.css({
               'font-size':$fontSize + 'px',
               'line-height':$lineHeight + 'px'
            });
         }

      // Run CSS "changes"
         changes();

      });
      
   };
}(jQuery));