window.onload = _init;

function _init(){
  
  //animate the title
  var all = [];
  var str0 = splittext('JS SplitText', 'font-size:20px');
  animatetext(str0, 'in', animate_the_rest);
  DOM('<br>');
  push_array(str0, all);
  
  
  function animate_the_rest(){
    var str1 = splittext('A sentence.');
    animatetext(str1, 'in', function(){
      //animatetext(str1, 'out');
      push_array(str1, all);
      DOM('');
      var str2 = splittext('Another sentence.');
      animatetext(str2, 'in', function(){
        //animatetext(str2, 'out');
        push_array(str2, all);
        DOM('');
        var str3 = splittext('Yet another sentence.', 'font- style:italic;color:#fff;');
        animatetext(str3, 'in', function(){
          //animatetext(str3, 'out');
          push_array(str3, all);
          animate_all_out();
        });
      });
    });
  }
  
  function animate_all_out(){
    animatetext(all, 'out');
  }
  
}

