<template>
  <div v-if="landpad" class="landpad">
    <h2>Details About: {{landpad.full_name}}</h2>
    <p>Status: {{landpad.status}}</p>
    <p>Location: {{landpad.location.name}}, {{landpad.location.region}}</p>
    <p>Coordinates: Latitude: {{landpad.location.latitude}},
    Longitude: {{landpad.location.longitude}}</p>
    <p>Details about the landing pad:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{landpad.details}}</p>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'landpad-detail',
  data() {
    return {
      landpad: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('landpad-selected', (landpad) => {
      this.landpad = landpad
    })
  }
}
</script>

<style lang="css" scoped>
.landpad {
  position: relative;
  margin-left: 5%;
}

img {
  width: auto;
  height: 285px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}
</style>
