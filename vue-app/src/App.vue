<script setup>

import PWABadge from './components/pwa/PWABadge.vue'

import Map from './components/map/Map.vue'

</script>



<template>


  <div class="@container h-dvh">


    <div class="flex flex-col @xl:flex-row h-dvh">

      <div class="h-1/3 @xl:h-auto @xl:w-sm">
        01
      </div>


      <div class="h-1/2 @xl:h-auto @xl:grow">

        <Map />

      </div>


      <div class="h-1/3 @xl:h-auto @xl:w-sm">
        03
      </div>

    </div>


  </div>




  <PWABadge />



</template>
