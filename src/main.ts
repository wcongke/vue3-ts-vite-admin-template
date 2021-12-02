import { createApp } from 'vue';
import App from './app.vue';

// 核心插件
import appPlugin from './plugin/index';

const app = createApp(App).use(appPlugin);

app.mount('#app');
