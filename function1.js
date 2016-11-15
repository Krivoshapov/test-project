//Здесь я довольно топорно попытался написать функцию, которая бы возвращала значения входящих в неё функций вместе,
//таким образом, чтобы  на выходе получалось полное описание того или иного жанра.
//Но, очевидно, я этого совсем не умею.

  var thumping = ['copying leads', 'full of life', 'crushing', 'funky', 'secondary or muted'];
  var harsh = ['operatic', 'screaming', 'growling', 'shrieking or snarling', 'shouting'];
  var distorted = ['crunchy', 'dropped', 'atonal', 'dirty', 'high-pitched tremolo', 'fuzz'];
  var fast = ['galloping','staccato','blast beat','bombastic','groovy'];
  var inc = ['none or rare', 'rare and brief', 'extended and technically improved', 'unnecessary', 'saw-like'];
  var provoking = ['depression and sorrow','metal, rude behaviour, dark literature','evil, hatred, diabolicism','death and torture', 'agression and war', 'social topics', 'personal feelings'];
  var long = [3, 4, 5, 6, 7];
  var descr = ['The following treats are usually considered common for this genre', 'bass: ', 'vocals: ', 'guitars: ', 'drums: ', 'guitar solos: ', 'lyrical themes: ', 'average song longitude in minutes: ']
  

  class Metal {
    constructor(bass, vocals, guitars, drums, solos, lyrics, songlength){
      Object.assign (this, {
        bass: thumping,
        vocals: harsh,
        guitars: distorted,
        drums: fast,
        solos: inc,
        lyrics: provoking,
        songlength: long
      });

      this.bass = bass;
      this.vocals = vocals;
      this.guitars = guitars;
      this.drums = drums;
      this.solos = solos;
      this.lyrics = lyrics;
      this.songlength = songlength;
   }
    description(){
      b(){
       return this.bass;
      }
      v(){
        return this.vocals;
      }
      g(){
        return this.guitars;
      }
      d(){
        return this.drums;
      }
      s(){
        return this.solos;
      }
      l(){
        return this.lyrics;
      }
      sl(){
        return this.songlength;

      return descr[0]+descr[1]+b+descr[2]+v+descr[3]+g+descr[4]+d+descr[5]+s+descr[6]+l+descr[7]+sl;
      
      }
    }
  }

  var Traditional_Heavy = new Metal (thumping[1], harsh[0], distorted[0], fast[0], inc[2], provoking[1], long[1]);
  var Thrash = new Metal (thumping[2], harsh[4], distorted[2], fast[1], inc[4], provoking[4, 5], long[2]);
  var Death = new Metal (thumping[0], harsh[2], distorted[1], fast[2], inc[1, 4], provoking[3, 4], long[0]);
  var Black = new Metal (thumping[4], harsh[3], distorted[4], fast[2], inc[1], provoking[2], long[3]);
  var Doom = new Metal (thumping[2], harsh[0], distorted[5], fast[3], inc[3], provoking[0], long[4]);
  var Alternative = new Metal (thumping[3], harsh[1], distorted[1], fast[4], inc[0], provoking[6], long[1]);

  console.log(Black.description());