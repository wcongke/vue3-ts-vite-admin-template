import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import ElementPlus from 'unplugin-element-plus/vite';
import { configHtmlPlugin } from './html';
import { configChunkSplitPlugin } from './chunk-split';
import { configCompressionPlugin } from './compression';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx(), vueSetupExtend()];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // element-plus
  vitePlugins.push(ElementPlus());

  // vite-plugin-chunk-split
  vitePlugins.push(configChunkSplitPlugin());

  // vite-plugin-compression
  vitePlugins.push(configCompressionPlugin());

  return vitePlugins;
}
