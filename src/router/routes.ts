import type { RouteRecordRaw } from 'vue-router';

import home from './modules/home';

/**
 * 主框架内显示
 */
export const frameIn: RouteRecordRaw[] = [home];

/**
 * 主框架外显示
 */
export const frameOut: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/views/login/index/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

/**
 * 错误页面
 */
export const errorPage: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('/@/views/not-found/index.vue'),
  },
];

export default [...frameIn, ...frameOut, ...errorPage];
