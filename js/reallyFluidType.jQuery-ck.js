(function(e){e.fn.reallyFluidType=function(t){function u(){r.css({"font-size":s+"px","line-height":o+"px"})}var n=e.extend({maximum:1800,minimum:550,fontRatio:35,lineRatio:1.45},t),r=e(this);if(e(window).width()>n.maximum)var i=n.maximum;else if(e(window).width()<n.minimum)var i=n.minimum;else var i=e(window).width();var s=i/n.fontRatio,o=s*n.lineRatio;u();e(window).resize(function(){function o(){r.css({"font-size":i+"px","line-height":s+"px"})}if(e(window).width()>n.maximum)var t=n.maximum;else if(e(window).width()<n.minimum)var t=n.minimum;else var t=e(window).width();var i=t/n.fontRatio,s=i*n.lineRatio;o()})}})(jQuery);