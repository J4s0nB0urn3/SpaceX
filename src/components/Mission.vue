<template>
  <div class="mission">
    <mission-list :missions='missions'></mission-list>
    <mission-detail :mission='selectedMission'></mission-detail>
  </div>
</template>

<script>

import MissionList from './MissionList.vue'
import MissionDetail from './MissionDetail.vue'

export default {
  name: 'Mission',
  data() {
    return {
      missions: [],
      selectedMission: null
    }
  },
  components: {
    "mission-list": MissionList,
    "mission-detail": MissionDetail
  },
  mounted() {
    fetch('https://api.spacexdata.com/v3/missions')
    .then(response => response.json())
    .then(missions => this.missions = missions)
  }
}
</script>

<style lang="css" scoped>

</style>
