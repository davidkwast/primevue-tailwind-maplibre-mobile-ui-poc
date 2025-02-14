<script setup>

import Card from 'primevue/card'

import PWABadge from './components/PWABadge.vue'

</script>



<template>



  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>



  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque
        quas!
      </p>
    </template>
  </Card>



  <PWABadge />



</template>
