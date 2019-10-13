<template>
  <div class="launch-list">
    <h3 class="header">Launches: </h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectLaunch" v-model="selectedLaunch">
        <option value="" selected>Reset</option>
        <option v-for="launch in launches" :value="launch">
          Launch-{{launch.flight_number}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'launch-list',
  data() {
    return {
      selectedLaunch: {}
    }
  },
  props: ['launches'],
  methods: {
    handleSelectLaunch() {
      eventBus.$emit('launch-selected', this.selectedLaunch)
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
  margin-left: 10%;
}

.header {
  margin-left: 40px;
}
</style>
