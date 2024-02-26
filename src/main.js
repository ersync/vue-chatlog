import '@/assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ScrollBooster from "scrollbooster";

createApp(App).mount('#app')

setTimeout(() => {
    new ScrollBooster({
        viewport: document.querySelector('.scrollable-wrapper'),
        content: document.querySelector('.scrollable-content'),
        scrollMode: 'native',
        direction: 'vertical'
    });

})