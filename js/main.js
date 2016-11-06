  var keck = ['keck', 'topkeck', 'кекушки'];
  var lol = ['lol', 'loool', 'lal', 'мяу нахуй'];
  var memes = [keck, lol, "mda", 1488, 34];
  var a = ['дрочить писульку','заниматься любовью с парнями','постить котиков','камвхорить','хамить'];
  var b = ['-Имя данного луркоеба','-Возраст данного луркоеба','-Толстота данного луркоеба','-Любимое занятие в конфе']
  
  var pidor = {
    name:'lurker',
    age: 21,
    fatness: 146,
    favocc: memes [2]
  };

  var Rustam = Object.create(pidor);
  Rustam.age = 20;
  Rustam.favocc = a[3];

  var Shramko = Object.create(pidor);
  Shramko.age = 19;
  Shramko.fatness = 9000;

  var Vlad = Object.create(pidor);
  Vlad.favocc = a[1];

  var Nika = Object.create(pidor);
  Nika.favocc = a[2];

  var CatOfNika = Object.create(Nika);
  CatOfNika.favocc = lol[3];

  var scan = function(pidor){
    return this.favocc+b[3];
  }

  console.log(pidor.scan);
