FlowType.JS
===========

**Description:** Font-size and line-height changed based on the element's width.

**Update!** _FlowType.JS now has options!_ Simply include the ``flowtype.jQuery.js`` plugin and call this function before the close of the body tag:

```
$('targetElement').flowtype({
   maximum   : 1800,
   minimum   : 550,
   fontRatio : 35,
   lineRatio : 1.45
});
```

The settings above are the standard settings, simply change the numbers to your preference. A few notes:
* "maximum" is the maximum threshold—where Really Fluid Type will stop doing it's magic.
* "minimum" is the minimum threshold.
* "fontRatio" will control the size of the font. The larger the number, the smaller the type.
* "lineRation" will change the line height. This number is similar to CSS; the larger the number, the larger the line height.

## Additional CSS

To keep type working smoothly, use this CSS as a base for typography and make changes as necessary (you may use _em_'s or _percentages_'s):

```
body {
   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
h1,h2,h3,h4,h5,h6,p {
   font-family: inherit;
   font-size: inherit;
}
h1 {
   font-size: 4em;
   line-height: 1em;
}
h1 {
   font-size: 3em;
   line-height: 1em;
}
h1 {
   font-size: 2em;
   line-height: 1em;
}
h1 {
   font-size: 1.2em;
   line-height: 1em;
}
```