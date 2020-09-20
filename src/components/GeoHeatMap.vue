<template>
<GmapMap :center="{lat:7.8731, lng:80.7718}" :zoom="7" map-type-id="terrain"
  style="width: 100%; height: 300px" :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }" >
</GmapMap>
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
  }
};
</script>

<style scoped>
</style>