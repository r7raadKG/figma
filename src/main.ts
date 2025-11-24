import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './style.css';
import './styles/main.scss';

createApp(App).use(vuetify).mount('#app');
