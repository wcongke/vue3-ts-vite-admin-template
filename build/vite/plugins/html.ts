/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';
import html from 'vite-plugin-html';

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_TITLE, VITE_USER_NODE_ENV } = env;

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_TITLE,
        nodeEnv: VITE_USER_NODE_ENV,
      },
    },
  });

  return htmlPlugin;
}
