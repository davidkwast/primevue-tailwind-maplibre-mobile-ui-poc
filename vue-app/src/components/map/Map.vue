<script setup>

import { onMounted } from 'vue';

import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

onMounted(() => {
    const map = new Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });
})
</script>



<template>

    <div id="map"></div>

</template>


<style>
#map {
    height: 100vh;
}
</style>