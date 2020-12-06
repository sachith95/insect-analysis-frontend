<template>

<!-- <GmapMap :center="{lat:7.8731, lng:80.7718}" :zoom="7" map-type-id="terrain" 
  style="width: 100%; height: 300px" :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }" >
</GmapMap> -->
<vue-google-heatmap :points="points"
                      width="100%"
                      :height="350"
                      :lat="7.8731"
                      :lng="80.7718"
                      :initial-zoom="7"
                       />
</template>

<script>
export default {
  name: "geoHeatMap",
  props: {
   geodata: {
      type: Array,
    },
    geoCoordMap:{
      type: Object
    }
  },
  data (){
    return {
       points: [
      {lat: 7.087310, lng:80.014366},
      {lat: 7.087310, lng:80.014364},
     {lat: 7.087310, lng:80.014365},
      {lat: 7.087310, lng:80.014368},
      {lat: 7.087310, lng:80.014369},
      {lat: 7.087310, lng:80.014364},
      {lat:9.380289, lng:80.37722},
      {lat:9.380289, lng:80.37722},
      {lat:9.380289, lng:80.37722},
      {lat:9.380289, lng:80.37722},
      {lat: 7.2833322, lng:81.666664},
      {lat: 7.2833322, lng:81.666664},
      {lat: 7.2833322, lng:81.666664},
      {lat:9.1996, lng:80.5883},
      {lat:9.1996, lng:80.5883},
      {lat:9.1996, lng:80.5883},
      {lat: 9.1996, lng:80.5883},
    ]
    }
  }
};
</script>

<style scoped>
</style>