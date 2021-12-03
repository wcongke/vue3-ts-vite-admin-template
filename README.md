# Vue 3 + Typescript + Vite 中后台工程模板

> 默认使用 Vue3 `<script setup>` [script setup](https://v3.cn.vuejs.org/api/sfc-script-setup.html) SFCs 模式开发。

- [vite](https://cn.vitejs.dev/)
- [vue3](https://v3.cn.vuejs.org/)

## 推荐 IDE 设置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 核心插件

- [pinia](https://pinia.esm.dev/)
- [vue-router4](https://next.router.vuejs.org/zh/index.html)
- [tailwindcss](https://www.tailwindcss.cn/)
- [x-icons](https://www.xicons.org/#/zh-CN)
- [element-plus](https://element-plus.gitee.io/zh-CN/)

## 代码规范

使用《阿里巴巴前端规约》[f2elint](https://www.npmjs.com/package/f2elint) 保障项目的编码规范和代码质量， `eslint` + `prettier` + `stylelint` + `markdownlint` + `commitlint`。

## 安装使用

- 获取项目代码

```bash
# 克隆仓库
git clone git@github.com:wcongke/vue3-ts-vite-admin-template.git

# 安装依赖
cd vue3-ts-vite-admin-template
pnpm install

# 运行(开发环境)
pnpm run dev
# 运行(测试环境)
pnpm run test
# 运行(生产环境)
pnpm run prod

# 打包(开发环境)
pnpm run build:dev
# 打包(测试环境)
pnpm run build:test
# 打包(生产环境)
pnpm run build:prod

```
