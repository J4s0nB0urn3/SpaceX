<template>
  <div id="app">
    <nav>
    <router-link to="/" class="nav-bar">Home</router-link>
    <router-link to="/about" class="nav-bar">About</router-link>
    <router-link to="/mission" class="nav-bar">Missions</router-link>
    <router-link to="/contact" class="nav-bar">Contact</router-link>
    <router-link to="/more" class="nav-bar">More</router-link>
    <router-view></router-view>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app{
  color: black;
  font-family: 'Rajdhani', sans-serif;
}

.nav-bar {
  margin-left: 140px;
  color: black;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Rajdhani', sans-serif;
  display: inline-block;
  text-align: center;
  padding: 5px;
  margin-top: 5px;
  padding-right: 30px;
  padding-left: 30px;
  position: sticky;
}

.nav-bar:link {
  color: black;
}

.nav-bar:visited {
  color: black;
}

.nav-bar:hover {
  color: white;
  cursor: pointer;
  background-color: black;
}

.nav-bar:active {
  color: black;
}

</style>
