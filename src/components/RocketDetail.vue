<template>
  <div v-if="rocket" class="rocket">
    <h2>Technical Details About: {{rocket.rocket_name}}</h2>
    <p>Height in feet/meters: {{rocket.height.feet}}/{{rocket.height.meters}}</p>
    <p>Country: {{rocket.country}}</p>
    <p>Company: {{rocket.company}}</p>
    <p>Type: {{rocket.rocket_type}}</p>
    <p>First flight: {{rocket.first_flight}}</p>
    <p>Description about the rocket:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{rocket.description}}</p>
    <button v-on:click="seen = !seen">Show me pictures</button>
    <div v-if="seen" class="img">
      <br><img :src="rocket.flickr_images[0]">
      <img :src="rocket.flickr_images[1]">
      <img :src="rocket.flickr_images[2]">
    </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'rocket-detail',
  data() {
    return {
      rocket: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('rocket-selected', (rocket) => {
      this.rocket = rocket
    })
  }
}
</script>

<style lang="css" scoped>
.rocket {
  position: relative;
  margin-left: 5%;
}
img {
  width: auto;
  height: 285px;
}

.img {
  margin-left: -150px;
}
</style>
