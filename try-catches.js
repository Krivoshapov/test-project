//Обработка исключений в моем исполнении: с первым случаем всё понятно и всё работает, а вот со вторым вопросы.
//Почему-то работает только та часть которая приписана к try (если значение истинное, показывает текст в скобках)
//а catch - не работает, если даже условие цикла while не выполняется.

  var long = [3, 4, 5, 6, 7];

  try {Death.description(vocals);}
    catch (err){
      console.log('This code doesn\'t seem to work; try one more time, sure it\'ll be a lucky one!');
    }

  while ([5] in long){
    try{console.log('Yes, the number you called does definitely exist! ^_^');}
      catch (keck){
        console.log('..oops! no such number in the array is found!');
      }
  }
