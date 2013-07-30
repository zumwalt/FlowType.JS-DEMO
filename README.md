Really Fluid Type
=================

**Description:** Font-size and line-height changed based on window width.

**Update!** Really Fluid Type now has options! Simply include the ``reallyFluidType.jQuery.js`` plugin and call the function before the close of the body tag:

```
$(window).ready(function(){
   $('body').reallyFluidType({
      maximum   : 1800,
      minimum   : 550,
      fontRatio : 35,
      lineRatio : 1.45
   });
});
```

The settings above are the standard settings, simply change the numbers to your preference. A few notes:
* "maximum" is the maximum threshold—where Really Fluid Type will stop doing it's magic.
* "minimum" is the minimum threshold.
* "fontRatio" will control the size of the font. The larger the number, the smaller the type.
* "lineRation" will change the line height. This number is similar to CSS; the larger the number, the larger the line height.