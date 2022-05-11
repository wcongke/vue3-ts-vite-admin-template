/**
 * Vite 代码拆包插件。支持多种拆包策略，可避免手动操作 manualChunks 潜在的循环依赖问题。
 * https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/master/README-CN.md
 */
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export function configChunkSplitPlugin() {
  return chunkSplitPlugin({
    strategy: 'unbundle',
    customSplitting: {
      // 将 Vue 相关库打包到单独的 chunk 中
      'vue-vendor': ['vue', 'vue-router'],
      // src/plugin 下的所有文件被合并成一个 chunk
      // plugin: [/src\/plugin/],
      // 打包组件库
      lib: ['element-plus', '@element-plus/icons-vue'],
    },
  });
}
