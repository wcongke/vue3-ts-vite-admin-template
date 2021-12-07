import type { App } from 'vue';

// element
import ElementPlus from 'element-plus';
// element icon
import { useElementPlusIcon } from './element-plus/icon';
import 'element-plus/dist/index.css';

// 进度条
import 'nprogress/nprogress.css';
// tailwind
import '../assets/css/tailwind.css';
// 公共样式
import '../assets/scss/public.scss';

export default (app: App): void => {
  app.use(ElementPlus);
  useElementPlusIcon(app);
};
