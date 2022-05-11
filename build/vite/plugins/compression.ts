/**
 * Vite 代码拆包插件。使用 gzip 或者 brotli 来压缩资源。
 * https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md
 */
import viteCompression from 'vite-plugin-compression';

export function configCompressionPlugin() {
  return viteCompression();
}
