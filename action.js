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
      // Incrementing the index of the pictures array to scroll to the following pic
      this.index_pic++;
      // Checking if the next picture actually exists or if the length of the pictures array has been reached
      if(this.index_pic >= this.pictures.length) {
        // Re-starting the sliding from the first picture
        this.index_pic = 0;
      }
    },
    scrollPrev() {
      // Decrementing the index of the pictures array to scroll to the previous pic
      this.index_pic--;
      // Checking if the previous picture actually exists
      if(this.index_pic <= 0) {
        // Re-starting the sliding from the last picture
        this.index_pic = this.pictures.length - 1;
      }
    },
    selectPicture(index) {
      // Assigning the index of the circle clicked to index_pic (circle and picture sharing the same index are shown simultaneously)
      this.index_pic = index;
    },
  },
});
