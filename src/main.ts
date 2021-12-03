import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

// 核心插件
import appPlugin from './plugin/index';

const app = createApp(App).use(router).use(appPlugin);

app.mount('#app');
