<template>
  <div class="about">
    <img src="../../src/assets/about2.png" alt="space image">
    <h1>Informations about the company:</h1>
    <br>
    <div id="header">
    <!-- <h3 id="header">About the company:</h3> -->
    <p>{{about.summary}}</p>
    <br>
  </div>
    <div class="about2">
    <!-- <p>The company's name: {{about.name}}</p> -->
    <p>The company's founder and CEO: {{about.founder}}</p>
    <p>The company was founded: in {{about.founded}}</p>
    <p>Number of employees: {{about.employees}}</p>
    <p>Number of vehicles: {{about.vehicles}}</p>
    <p>Number of launchsites: {{about.launch_sites}}</p>
    <p>Number of testsites: {{about.test_sites}}</p>
    <!-- <div id="mapid"></div> -->
    <!-- <p>Headquarters:</p>
    <ul>
      <li>Address: {{about.headquarters.address}}</li>
      <li>City: {{about.headquarters.city}}</li>
      <li>State: {{about.headquarters.state}}</li>
    </ul> -->
    <p>For the company's official website: <a href="https://www.spacex.com" target="_blank">Click here</a></p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      about: [],
    }
  },
  mounted() {
    fetch('https://api.spacexdata.com/v3/info')
    .then(response => response.json())
    .then(about => this.about = about);
    this.initMap();
    this.initLayers();
  }
}
</script>

<style scoped>

#mapid {
  height: 180px;
  width: auto;
}

#header {
  margin-top: 8%;
  margin-left: 180px;
  margin-right: 180px;
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  color: white;
  font-size: 25px;
}
  img {
    margin-top: 0px;
    size: cover;
    width: 100%;
    height: 70%;
    position: absolute;
  }

  .about {
    position: relative;
    color: white;
    font-size: 25px;
  }

  .about2 {
    position: relative;
    top: 210px;
    color: black;
    text-align: center;
  }

  li {
    list-style: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
