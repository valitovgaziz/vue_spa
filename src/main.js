import { createApp } from 'vue';
import i18n from '@/locales/i18n.js';
import App from './App.vue';



createApp(App)
    .use(i18n)
    .mount('#app');
