<template>
  <div class="rocket-list">
    <h3 class="header">Rockets:</h3>
    <form v-on:submit.prevent class="form">
      <select v-on:change="handleSelectRocket" v-model="selectedRocket">
        <option value="" selected>Reset</option>
        <option v-for="rocket in rockets" :value="rocket">
          {{rocket.rocket_name}}
        </option>
      </select>
    </form>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'rocket-list',
  data() {
    return {
      selectedRocket: {}
    }
  },
  props: ['rockets'],
  methods: {
    handleSelectRocket() {
      eventBus.$emit('rocket-selected', this.selectedRocket)
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
  margin-left: 9%;
}

.header {
  margin-left: 40px;
}
</style>
</style>
