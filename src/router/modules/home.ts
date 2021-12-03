import type { RouteRecordRaw } from 'vue-router';

// 登录验证
const meta = { auth: true };

const homeRouter: RouteRecordRaw = {
  path: '/',
  name: 'home',
  meta: {
    ...meta,
    icon: 'home',
    title: '首页',
  },
  component: () => import('/@/views/home/index/index.vue'),
};

export default homeRouter;
