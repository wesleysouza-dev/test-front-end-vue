<template>
    <div>
    <gmap-map
      :center="center"
      :zoom="5"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>


<script>


export default {
  name: 'ModalGoogleMaps',
  props: {
    lati: [Number, String],
    lngt: [Number, String],
  },
  components: {
     
  },
    data() {
        return {
            center: { lat: this.lati, lng: this.lngt },
            markers: []
        }
    },
    methods: {
        geolocate: function() {
                this.center = {
                lat: parseInt(this.center.lat),
                lng: parseInt(this.center.lng)
            };
        
        }
    },
      
    mounted() {
        this.geolocate();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>