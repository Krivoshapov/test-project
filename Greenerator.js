function *lie(){
  var d = 10;
  try {
    yield d*2;
    yield d*3;
    yield d*5;
  }
  finally {
    alert('Шишка встала, возбудился!');
  }
}

var dark = lie();

console.log(dark.next());
console.log(dark.next());
console.log(dark.next());
console.log(dark.next());