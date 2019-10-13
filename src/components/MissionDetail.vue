<template>
  <div v-if="mission" class="mission">
    <h2>Details About: {{mission.mission_name}}</h2>
    <p>Manufacturer: {{mission.manufacturers[0]}}</p>
    <p>Description about the mission:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{mission.description}}</p>
    <p>For the missions' official website: <a :href="mission.website" target="_blank">Click here</a></p>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'mission-detail',
  data() {
    return {
      mission: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('mission-selected', (mission) => {
      this.mission = mission
    })
  }
}
</script>

<style lang="css" scoped>
.mission {
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
