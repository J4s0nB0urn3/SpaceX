<template>
  <div class="mission-list">
    <h3 class="header">Missions:</h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectMission" v-model="selectedMission">
        <option value="" selected>Reset</option>
        <option v-for="mission in missions" :value="mission">
          {{mission.mission_name}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'mission-list',
  data() {
    return {
      selectedMission: {}
    }
  },
  props: ['missions'],
  methods: {
    handleSelectMission() {
      eventBus.$emit('mission-selected', this.selectedMission)
    },
  }
}
</script>

<style lang="css" scoped>
.ul {
  display: inline;
  text-align: center;
}

.li {
  display: inline;
}

nav {
  text-align: center;
}

.form {
  position: relative;
  margin-top: -40px;
  margin-left: 12%;
}

.header {
  margin-left: 40px;
}
</style>
