module.exports = {
  extends: [
    'eslint-config-ali/typescript/vue',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  globals: {
    // defineProps 是编译宏 不需要再次导入
    defineProps: 'readonly',
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
  },
};
