import {createApp} from 'vue'
import axios from "axios";
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

window.axios = axios

createApp(App).use(router).mount('#app')
