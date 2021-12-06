import { createRouter, createWebHashHistory } from 'vue-router';
import { useCookies, useNProgress } from '@vueuse/integrations';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  // 进度条加载
  useNProgress().start();
  // 验证当前路由所有的匹配中是否需要有token验证
  if (to.matched.some((r) => r.meta.auth)) {
    const cookies = useCookies();
    const token = cookies.get('token');

    if (token) {
      next();
    } else {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    // 不需要校验token
    next();
  }
});

router.afterEach(() => {
  // 进度条结束
  useNProgress().done();
});

export default router;
