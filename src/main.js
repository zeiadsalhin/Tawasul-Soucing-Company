import './assets/main.css'
import './assets/index.css'
import Swiper from 'swiper';
import 'swiper/css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
