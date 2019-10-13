<template>
  <div class="lanpad-list">
    <h3 class="header">Landing pads: </h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectLandpad" v-model="selectedLandpad">
        <option value="" selected>Reset</option>
        <option v-for="landpad in landpads" :value="landpad">
          {{landpad.id}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'landpad-list',
  data() {
    return {
      selectedLandpad: {}
    }
  },
  props: ['landpads'],
  methods: {
    handleSelectLandpad() {
      eventBus.$emit('landpad-selected', this.selectedLandpad)
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
  margin-left: 12.5%;
}

.header {
  margin-left: 40px;
}
</style>
</style>
