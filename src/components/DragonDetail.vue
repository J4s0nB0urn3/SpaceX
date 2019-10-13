<template>
  <div v-if="dragon" class="dragon">
    <h2>Technical Details About: {{dragon.name}}</h2>
    <p>Crew capacity: {{dragon.crew_capacity}}</p>
    <p>Type: {{dragon.type}}</p>
    <p>First flight: {{dragon.first_flight}}</p>
    <p>Description about the capsule:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{dragon.description}}</p>
    <button v-on:click="seen = !seen">Show me pictures</button>
    <div v-if="seen" class="img">
      <br><img :src="dragon.flickr_images[0]">
      <img :src="dragon.flickr_images[1]">
      <img :src="dragon.flickr_images[2]">
    </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'dragon-detail',
  data() {
    return {
      dragon: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('dragon-selected', (dragon) => {
      this.dragon = dragon
    })
  }
}
</script>

<style lang="css" scoped>
.dragon {
  position: relative;
  margin-left: 4%;
}
img {
  width: auto;
  height: 285px;
}

.img {
  margin-left: -80px;
}
</style>
