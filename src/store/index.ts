import UA from './modules/ua';

/**
 * @description app状态库
 */
const appStore: any = {};

/**
 * @description 注册app状态库
 */
const registerStore = () => {
  appStore.ua = UA();
};

export { registerStore, appStore };
