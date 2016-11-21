var jerk = function(){
  var a = document.getElementById("button");
  if (typeof a!=null&&undefined /*по умолчанию браузер возвращает при вызове функции надпись a is null*/)
  {a.onclick = alert('you have pressed the button!');}
    else {console.error('a = null or undefined so the code doesn\'t run');}
    return a;
  }
jerk();
//однако a - не null; если мы оставим в условии выше только null, он все равно вернет тот же текст, хотя не должен.
//а вот при добавлении undefined - выполняется условие else, следовательно, а - undefined. почему так?