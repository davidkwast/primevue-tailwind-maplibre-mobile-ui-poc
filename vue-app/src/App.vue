<script setup>

import PWABadge from './components/pwa/PWABadge.vue'

import Map from './components/map/Map.vue'
import Sidebar from './components/sidebar/Sidebar.vue'

</script>



<template>


  <div class="@container h-dvh overflow-clip">


    <div class="flex flex-col @2xl:flex-row h-dvh">



      <div class="h-1/4 @2xl:h-full @2xl:max-w-sm @2xl:min-w-8">

        <Sidebar />

      </div>


      <div class="h-2/4 @2xl:h-full @2xl:grow @2xl:min-w-sm">

        <Map />

      </div>


      <div class="h-1/4 @2xl:h-full @2xl:max-w-sm @2xl:min-w-8">

        <Sidebar />

      </div>



    </div>


  </div>




  <PWABadge />



</template>
