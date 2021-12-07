/**
 * element plus icon
 * @see https://element-plus.gitee.io/zh-CN/component/icon.html#icon-usage
 */

import type { App, Component } from 'vue';
import { User, UserFilled, Key } from '@element-plus/icons-vue';

const iconComponents = [User, UserFilled, Key];

/**
 * @description 全局注册element icon
 * @param {App} app
 */
export function useElementPlusIcon(app: App) {
  iconComponents.forEach((component: Component) => {
    app.component(component.name as string, component);
  });
}
