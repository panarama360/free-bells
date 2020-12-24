import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import appFirebase from "@/firebase";
import store from "@/store/store";
createApp(App)
    .use(router)
    .use(store)
    .provide('firebase', appFirebase)
    .mount('#app')
