<template>
  <div v-if="launchpad" class="launchpad">
    <h2>Details About: Launching pad-{{launchpad.id}}</h2>
    <p>Launch site's name: {{launchpad.site_name_long}}</p>
    <p>Status: {{launchpad.status}}</p>
    <p>Location: {{launchpad.location.name}}, {{launchpad.location.region}}</p>
    <p>Coordinates: Latitude: {{launchpad.location.latitude}},
    Longitude: {{launchpad.location.longitude}}</p>
    <p>Vehicle launched: {{launchpad.vehicles_launched[0]}}</p>
    <p>Attempted launches: {{launchpad.attempted_launches}}</p>
    <p>Successful launches: {{launchpad.successful_launches}}</p>
    <p>Description about the launching pad:</p>
    <p  style="margin-right: 520px; margin-left: 50px;">{{launchpad.details}}</p>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'launchpad-detail',
  data() {
    return {
      launchpad: null,
      seen: false
    }
  },
  mounted() {
    eventBus.$on('launchpad-selected', (launchpad) => {
      this.launchpad = launchpad
    })
  }
}
</script>

<style lang="css" scoped>
.launchpad {
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
