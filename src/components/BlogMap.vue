<template>
  <div class="blog-map">
    <googlemaps-map
      ref="map"
      :center="center"
      :zoom="zoom"
      :options="mapOptions"
      @update:center="setCenter"
      @update:zoom="setZoom"
      @idle="onIdle"
      @click="onMapClick"
    >
      <!-- User Position -->
      <googlemaps-user-position
        @update:position="setUserPosition"
      />
  </googlemaps-map>
</div>
</template>

<script>
import {
  createNamespacedHelpers
} from 'vuex'

const {
  mapGetters: mapsGetters,
  mapActions: mapsActions,
} = createNamespacedHelpers('maps')

export default {
  computed: {
    ...mapsGetters([
      'center',
      'zoom',
    ]),

    mapOptions() {
      return {
        fullscreenControl: false,
      }
    },
  },

  methods: {
    ...mapsActions([
      'setCenter',
      'setUserPosition',
      'setZoom',
    ]),
  }
}
</script>
