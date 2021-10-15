import { createApp } from 'vue';

import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(store).use(router).mount('#app');
