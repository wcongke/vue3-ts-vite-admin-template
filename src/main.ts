import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import router from './router';
import { registerStore } from './store';

// 核心插件
import appPlugin from './plugin/index';

const app = createApp(App).use(createPinia()).use(router).use(appPlugin);
registerStore();

app.mount('#app');
