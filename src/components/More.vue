<template>
  <div class="more">
    <rocket-list :rockets='rockets'></rocket-list>
    <rocket-detail :rocket='selectedRocket'></rocket-detail>
    <dragon-list :dragons='dragons'></dragon-list>
    <dragon-detail :dragon='selectedDragon'></dragon-detail>
    <launch-list :launches='launches'></launch-list>
    <launch-detail :launch='selectedLaunch'></launch-detail>
    <landpad-list :landpads='landpads'></landpad-list>
    <landpad-detail :landpad='selectedLandpad'></landpad-detail>
    <launchpad-list :launchpads='launchpads'></launchpad-list>
    <launchpad-detail :launchpad='selectedLaunchpad'></launchpad-detail>
  </div>
</template>

<script>

import RocketList from './RocketList.vue'
import RocketDetail from './RocketDetail.vue'

import DragonList from './DragonList.vue'
import DragonDetail from './DragonDetail.vue'

import LandpadList from './LandPadList.vue'
import LandpadDetail from './LandPadDetail.vue'

import LaunchpadList from './LaunchPadList.vue'
import LaunchpadDetail from './LaunchPadDetail.vue'

import LaunchList from './LaunchesList.vue'
import LaunchDetail from './LaunchesDetail.vue'

export default {
  name: 'More',
  data() {
    return {
      rockets: [],
      selectedRocket: null,
      dragons: [],
      selectedDragon: null,
      landpads: [],
      selectedLandpad: null,
      launchpads: [],
      selectedLaunchpad: null,
      launches: [],
      selectedLaunch: null
    }
  },
  components: {
    "rocket-list": RocketList,
    "rocket-detail": RocketDetail,
    "dragon-list": DragonList,
    "dragon-detail": DragonDetail,
    "landpad-list": LandpadList,
    "landpad-detail": LandpadDetail,
    "launchpad-list": LaunchpadList,
    "launchpad-detail": LaunchpadDetail,
    "launch-list": LaunchList,
    "launch-detail": LaunchDetail
  },
  mounted() {
    fetch('https://api.spacexdata.com/v3/rockets')
    .then(response => response.json())
    .then(rockets => this.rockets = rockets);

    fetch('https://api.spacexdata.com/v3/dragons')
    .then(response => response.json())
    .then(dragons => this.dragons = dragons);

    fetch('https://api.spacexdata.com/v3/landpads')
    .then(response => response.json())
    .then(landpads => this.landpads = landpads);

    fetch('https://api.spacexdata.com/v3/launchpads')
    .then(response => response.json())
    .then(launchpads => this.launchpads = launchpads);

    fetch('https://api.spacexdata.com/v3/launches')
    .then(response => response.json())
    .then(launches => this.launches = launches)
  }
}
</script>

<style lang="css" scoped>
  .more {
    margin-left: 150px;
    margin-top: 100px;
  }
</style>
