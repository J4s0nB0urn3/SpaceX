<template>
  <div class="dragon-list">
    <h3 class="header">Capsules:</h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectDragon" v-model="selectedDragon">
        <option value="" selected>Reset</option>
        <option v-for="dragon in dragons" :value="dragon">
          {{dragon.name}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'dragon-list',
  data() {
    return {
      selectedDragon: {}
    }
  },
  props: ['dragons'],
  methods: {
    handleSelectDragon() {
      eventBus.$emit('dragon-selected', this.selectedDragon)
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
