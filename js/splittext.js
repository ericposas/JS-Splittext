var T = TweenLite;
var TL = TimelineLite;
var log = console.log;

function splittext(string, style){
  var elts = [];
  var str = string;
  var str_lttrs = str.split('');
  for(let i = 0; i < str_lttrs.length; i++){
    var elt = DOM(str_lttrs[i]);
    elt.style.display = 'inline-block';
    if(style){
      elt.style.cssText += style;
    }
    if(elt.innerHTML == ' '){
      elt.innerHTML = '&nbsp;';
    }
    elts.push(elt);
  }
  return elts;
}

function animatetext(elements_array, in_out, callback){
  for(let i = 0; i < elements_array.length; i++){
    T[in_out == 'in' ? 'from' : 'to'](elements_array[i], .5, {
      delay: (.02 * i),
      ease: in_out == 'in' ? Power1.easeOut : Power1.easeIn,
      alpha: 0,
      rotation: 45,
      y: in_out == 'in' ? 30 : -30,
      onCompleteParams: [i, elements_array],
      onComplete: function(_i, _arr){
        if(_i == _arr.length-1){
          callback ? callback() : '';
        }
      }
    });
  }
}

function DOM(content){
  if(!window.elements){
    window.elements = {};
    elements.count = 0;
  }
  var elt = document.createElement('div');
  elt.innerHTML = content;
  elements.count++;
  elt.id = 'elt-' + elements.count;
  elt.classList.add('elt-' + elements.count);
  document.body.appendChild(elt);
  return elt;
}

function push_array(array, dest_array){
  for(var i = 0; i < array.length; i++){
    dest_array.push(array[i]);
  }
}
