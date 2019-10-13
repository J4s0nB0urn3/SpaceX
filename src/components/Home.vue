<template>
<div>
  <div class='carousel-view'>
      <transition-group
        class='carousel'
        tag="div">
        <div
          v-for="slide in slides"
          class='slide'
          :key="slide.id">
          <img class='slide__image' :src='slide.imgLink'>
        </div>
      </transition-group>
      <div class='carousel-controls'>
        <button class='carousel-controls__button1' @click="previous">prev</button>
        <button class='carousel-controls__button2' @click="next">next</button>
      </div>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  data () {
    return {
      slides: [
        {
          imgLink: require('../assets/space1.png'),
          id: 1
        },
        {
          imgLink: require('../assets/space2.png'),
          id: 2
        },
        {
          imgLink: require('../assets/background.png'),
          id: 3
        },
        {
          imgLink: require('../assets/space4.png'),
          id: 4
        },
        {
          imgLink: require('../assets/space3.png'),
          id: 5
        }
      ]
    }
  },

  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  },
}
</script>

<style>
.carousel-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.slide {
  flex: 0 0 20em;
  height: 565px;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
img {
  margin-top: 35px;
  width: 1420px;
  height: 565px;
}

.carousel-controls__button2 {
  position: fixed;
  top: 95%;
  right: 46%;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  background-color: white;
  color: black;
  cursor: pointer;
}

.carousel-controls__button1 {
  position: fixed;
  top: 95%;
  right: 50%;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  background-color: white;
  color: black;
  cursor: pointer;
}

.carousel-controls__button2:hover {
  background-color: black;
  color: white;
}

.carousel-controls__button1:hover {
  background-color: black;
  color: white;
}
</style>
