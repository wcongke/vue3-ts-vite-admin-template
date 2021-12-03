import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configHtmlPlugin } from './html';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx(), vueSetupExtend()];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  return vitePlugins;
}
