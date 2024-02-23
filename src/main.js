import '@/assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ScrollBooster from "scrollbooster";

createApp(App).mount('#app')

new ScrollBooster({
    viewport: document.querySelector('.w'),
    content: document.querySelector('.c'),
    scrollMode: 'native',
    direction: 'vertical'
});
