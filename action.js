/*ASSIGNMENT
Rifate lo slider di immagini con Vue.
Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
BONUS 1: l'autoplay con una timing functions.
Piccolo consiglio: cercate nella documentazione di vue come fare per eseguire una funzione quando l'istanza di Vue è stata creata.
BONUS 2: cliccando su un pallino, si attiva l'immagine corrispondente.
*/

let app = new Vue({
  el: '#root',
  data: {
    index_pic: 0,
    pictures : [
    'img/lake.jpg',
    'img/sunset.jpg',
    'img/forest.jpg',
    'img/ocean.jpg',
    'img/mountains.jpg',
    ],
    descriptions : [
    'Lake',
    'Sunset',
    'Forest',
    'Ocean',
    'Mountains',
    ],
  },
  methods: {
    scrollNext() {
      this.index_pic++;
      if(this.index_pic >= this.pictures.length) {
        this.index_pic = 0;
      }
    },
    scrollPrev() {
      this.index_pic--;
      if(this.index_pic <= 0) {
        this.index_pic = this.pictures.length - 1;
      }
    },
  },
});
