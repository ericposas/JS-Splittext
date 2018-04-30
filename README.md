# JS SPLITTEXT 

## ABOUT:

* wrote a splittext tool for use in animation (gsap)

## HOW TO USE:

* first, split a string by: 
```javascript
var str0 = splittext('a simple string', 'color:#ff0000');
//function splittext(string, style[optional]){}
```

* next, animate the string: 
```javascript
animatetext(str0, 'in', myCallback);
//animatetext function signature 
//function animatetext(arrayofletters, animate_in_or_out[must specify], callback[optional]){}
```

* also has utility functions 'push_array()' which pushes all letter elements into a new parent array

* and 'DOM()' which can be used to create simple div elements 