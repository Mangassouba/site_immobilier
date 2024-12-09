import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap';
import 'swiper/swiper-bundle.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "swiper/swiper-bundle.min.css";
import App from './App.vue'
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
