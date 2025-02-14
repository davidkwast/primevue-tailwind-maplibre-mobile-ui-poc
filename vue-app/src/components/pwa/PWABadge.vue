<script setup>
import { computed, ref, watch } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'


// check for updates every hour
const period = 60 * 60 * 1000

const swActivated = ref(false)



/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 * @param {string} swUrl
 * @param {ServiceWorkerRegistration} r
 */
function registerPeriodicSync(swUrl, r) {
  if (period <= 0) return

  setInterval(async () => {
    if ('onLine' in navigator && !navigator.onLine)
      return

    const resp = await fetch(swUrl, {
      cache: 'no-store',
      headers: {
        'cache': 'no-store',
        'cache-control': 'no-cache',
      },
    })

    if (resp?.status === 200)
      await r.update()
  }, period)
}


const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    if (period <= 0) return
    if (r?.active?.state === 'activated') {
      swActivated.value = true
      registerPeriodicSync(swUrl, r)
    }
    else if (r?.installing) {
      r.installing.addEventListener('statechange', (e) => {
        /** @type {ServiceWorker} */
        const sw = e.target
        swActivated.value = sw.state === 'activated'
        if (swActivated.value)
          registerPeriodicSync(swUrl, r)
      })
    }
  },
})

const pwa_message = computed(() => {
  if (offlineReady.value)
    return 'App ready to work offline'
  if (needRefresh.value)
    return 'New content available, click on reload button to update.'
  return ''
})

function close() {
  offlineReady.value = false
  needRefresh.value = false
}


//
// import Toast from 'primevue/toast'
import { useToast } from "primevue/usetoast"
import Toast from 'primevue/toast'
import Button from 'primevue/button';

const toast = useToast();

const show_toast = () => {
  toast.add({ severity: 'info', summary: 'PWA status', detail: pwa_message });
};
//

watch(pwa_message, (e) => {
  show_toast()
})


</script>



<template>



  <Toast @close="close">

    <template #message="slotProps">


      <div class="p-toast-message-text" data-pc-section="messagetext">

        <span class="p-toast-summary" data-pc-section="summary">{{ slotProps.message.summary }}</span>

        <div class="p-toast-detail" data-pc-section="detail">

          {{ slotProps.message.detail }}

          <Button v-if="needRefresh" label="Reload" @click="updateServiceWorker()" />

        </div>

      </div>







    </template>

  </Toast>



</template>
