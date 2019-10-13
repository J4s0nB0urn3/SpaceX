<template>
  <div class="map">
    <l-map ref="map" :zoom="zoom" :center="center" :marker="marker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker></l-map>
    </l-map>
    <div id="header">
      <h3><u>SpaceX headquarters' address:</u> Rocket Rd,</h3>
      <h3>Hawthorne, CA 90250, USA</h3>
      <h3><u>Phone:</u> 310-363-6000</h3>
      <h3><u>Media Inquiries:</u> media@spacex.com</h3>
      <h3><u>Sales Inquiries:</u> sales@spacex.com</h3>
      <h3><u>Social Media:</u></h3>
      <a href="https://www.facebook.com/pages/category/Aerospace-Company/SpaceX-226435907904104/" class="fa fa-facebook" target="_blank"></a>
      <a href="https://twitter.com/spacex" class="fa fa-twitter" target="_blank"></a>
      <a href="https://www.youtube.com/spacex" class="fa fa-youtube" target="_blank"></a>
      <a href="https://www.instagram.com/spacex/" class="fa fa-instagram" target="_blank"></a>
      <a href="https://www.flickr.com/photos/spacex" class="fa fa-flickr" target="_blank"></a>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
  name: 'example',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom:15,
      center: L.latLng(33.920905, -118.328290),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(33.920903, -118.328290),
    }
  },
  methods: {
    mounted() {
        setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
    }
  }
}
</script>
<style scoped>
.map {
  position: absolute;
  height:500px;
  width: 500px;
  left: 100px;
  top: 80px;
}

#header {
  text-align: center;
  display: block;
  position: relative;
  top: -85%;
  left: 130%;
}

.fa:hover {
    opacity: 0.7;
}

.fa-flickr {
  background: #f40083;
  color: white;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa {
  padding: 20px;
  font-size: 19px;
  width: 10px;
  text-align: center;
  text-decoration: none;
  margin: 5px 1px;
}
</style>
