/*ASSIGNMENT
Rifate lo slider di immagini con Vue.
Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
BONUS 1: l'autoplay con una timing function.
Piccolo consiglio: cercate nella documentazione di vue come fare per eseguire una funzione quando l'istanza di Vue è stata creata.
BONUS 2: cliccando su un pallino, si attiva l'immagine corrispondente.
*/

/*
Initialization of variables and constants (as global variables)
let autoplay;
const sliding_interval = 3000;
*/

let app = new Vue({
  el: '#root',
  data: {
    autoplay: '',
    sliding_interval: 3000, // milliseconds (3s)
    isAutoplay: true,
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
  },  // Closing "data"
  created: function() {
    autoplay = setInterval(this.onAutoplay, this.sliding_interval);
  },
  methods: {
    nextPicture() {
      // Incrementing the index of the pictures array to scroll to the following pic
      this.index_pic++;
      // Checking if the next picture actually exists or if the length of the pictures array has been reached
      if(this.index_pic >= this.pictures.length) {
        // Re-starting the sliding from the first picture
        this.index_pic = 0;
      }
    },
    scrollNext() {
      this.stopAutoplay();
      this.nextPicture();
    },
    scrollPrev() {
      this.stopAutoplay();
      // Decrementing the index of the pictures array to scroll to the previous pic
      this.index_pic--;
      // Checking if the previous picture actually exists
      if(this.index_pic < 0) {
        // Re-starting the sliding from the last picture
        this.index_pic = this.pictures.length - 1;
      }
    },
    selectPicture(index) {
      this.stopAutoplay();
      // Assigning the index of the clicked circle to index_pic (circle and picture sharing the same index are shown simultaneously)
      this.index_pic = index;
    },
    stopAutoplay() {
      clearInterval(autoplay);
      // Check if autoplay is on --> false because it's been stopped
      this.isAutoplay = false;
    },
    onAutoplay() {
      this.nextPicture();
      this.isAutoplay = true;
    },
    toggleAutoplay() {
      if(this.isAutoplay) {
        this.stopAutoplay();
      } else {
        autoplay = setInterval(this.onAutoplay, this.sliding_interval);
      }
    }
  },  // Closing "methods"
});
