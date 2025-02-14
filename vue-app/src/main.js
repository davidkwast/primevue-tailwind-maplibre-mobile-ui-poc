import { createApp } from 'vue'


import App from './App.vue'

import './style.css'


const app = createApp(App);



//
// PRIMEVUE

import PrimeVue from "primevue/config";

import Aura from '@primevue/themes/aura';


app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


// PRIMEVUE - TOAST

import ToastService from "primevue/toastservice";
// Prime Vue Toast
app.use(ToastService);



//
// VUE

app.mount("#app");
