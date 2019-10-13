<template>
  <div class="launchpad-list">
    <h3 class="header">Launching pads: </h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectLaunchpad" v-model="selectedLaunchpad">
        <option value="" selected>Reset</option>
        <option v-for="launchpad in launchpads" :value="launchpad">
          Launching pad-{{launchpad.id}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'launchpad-list',
  data() {
    return {
      selectedLaunchpad: {}
    }
  },
  props: ['launchpads'],
  methods: {
    handleSelectLaunchpad() {
      eventBus.$emit('launchpad-selected', this.selectedLaunchpad)
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
  margin-left: 14%;
}

.header {
  margin-left: 40px;
}
</style>
