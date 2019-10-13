<template>
  <div v-if="launch" class="launch">
    <h2>Details About: Launch-{{launch.flight_number}}</h2>
    <p>Mission's name: {{launch.mission_name}}</p>
    <p>Location: {{launch.launch_site.site_name_long}}</p>
    <p>Launch year: {{launch.launch_year}}</p>
    <p>Rocket: {{launch.rocket.rocket_name}}</p>
    <p>Details about the launch:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{launch.details}}</p>
    <button v-on:click="seen = !seen">Show me the mission patch:</button>
    <div v-if="seen"><br>
      <img :src="launch.links.mission_patch">
    </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'launch-detail',
  data() {
    return {
      launch: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('launch-selected', (launch) => {
      this.launch = launch
    })
  }
}
</script>

<style lang="css" scoped>
.launch {
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
