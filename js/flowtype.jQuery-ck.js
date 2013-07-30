/*   
* FlowType.JS 1.0
* Copyright 2013, John Wilson http://j-wilson.com/
* July 2013
*/(function(e){e.fn.flowtype=function(t){function u(){r.css({"font-size":s+"px","line-height":o+"px"})}var n=e.extend({maximum:1800,minimum:550,fontRatio:35,lineRatio:1.45},t),r=e(this);if(r.width()>n.maximum)var i=n.maximum;else if(r.width()<n.minimum)var i=n.minimum;else var i=r.width();var s=i/n.fontRatio,o=s*n.lineRatio;u();e(window).resize(function(){function s(){r.css({"font-size":t+"px","line-height":i+"px"})}if(r.width()>n.maximum)var e=n.maximum;else if(r.width()<n.minimum)var e=n.minimum;else var e=r.width();var t=e/n.fontRatio,i=t*n.lineRatio;s()})}})(jQuery);