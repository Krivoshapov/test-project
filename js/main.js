  var keck = ['keck', 'topkeck', 'кекушки'];
  var lol = ['lol', 'loool', 'lal', 'мяу нахуй'];
  var memes = [keck, lol, "mda", 1488, 34];
  var a = ['дрочить писульку','заниматься любовью с парнями','постить котиков','камвхорить','хамить'];
  var b = ['Имя данного луркоеба:','Возраст данного луркоеба:','Толстота данного луркоеба:','Любимое занятие в конфе:']
  
  var pidor = {
    name:'lurker',
    age: 21,
    fatness: 146,
    favocc: memes [2]
  };

  var Rustam = Object.create(pidor);
  Rustam.name = 'Рустам';
  Rustam.age = 20;
  Rustam.favocc = a[3];

  var Shramko = Object.create(pidor);
  Shramko.name = 'Шрамко';
  Shramko.age = 19;
  Shramko.fatness = 9000;

  var Vlad = Object.create(pidor);
  Vlad.name = 'Влад';
  Vlad.favocc = a[1];

  var Nika = Object.create(pidor);
  Nika.name = 'Ника';
  Nika.favocc = a[2];

  var CatOfNika = Object.create(Nika);
  CatOfNika.name = 'Кот Ники';
  CatOfNika.favocc = lol[3];

  var name1 = function(pidor){
    return b[0]+pidor.name;
  }

  var age1 = function(pidor){
    return b[1]+pidor.age;
  }

  var fatness1 = function(pidor){
    return b[2]+pidor.fatness;
  }

  var favocc1 = function(pidor){
    return b[3]+pidor.favocc;
  }

  console.log('Здесь будут выведены данные об одном из луркоебов-участников конфы:')
  console.log(name1(Nika));
  console.log(age1(Nika));
  console.log(fatness1(Nika));
  console.log(favocc1(Nika));
