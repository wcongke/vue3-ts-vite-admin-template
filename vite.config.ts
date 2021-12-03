import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { createVitePlugins } from './build/vite/plugins';
import { wrapperEnv } from './build/utils';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: createVitePlugins(viteEnv, isBuild),
    build: {
      sourcemap: false,
      brotliSize: false,
      // 打包大小不超过1000kb警告
      chunkSizeWarningLimit: 1000,
      minify: false,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: VITE_DROP_CONSOLE,
        },
      },
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  };
};
