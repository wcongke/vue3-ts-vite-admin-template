<script setup lang="ts">
import { reactive, ref } from 'vue';
import router from '/@/router/index';
import { useCookies } from '@vueuse/integrations';
import { ElMessage } from 'element-plus';
import { loginReq, LOGIN } from '/@/api/modules/login.api';
import rules from './rules';

/**
 * @description 应用标题
 */
const title: string = import.meta.env.VITE_TITLE;

/**
 * @description 登录表单ref
 */
const loginFormRef = ref();

/**
 * @description 登录表单
 */
const form: loginReq = reactive({
  account: 'admin',
  password: 'admin',
});

/**
 * @description 提交登录表单
 * @param {loginReq} form -登录表单
 */
function submit(loginForm: loginReq) {
  loginFormRef.value.validate(async (valid: boolean) => {
    if (!valid) return;

    try {
      const res = await LOGIN(loginForm);
      const cookies = useCookies();

      cookies.set('token', res.token);
      router.push((router.currentRoute.value.query.redirect as string) || '/');
      ElMessage({
        message: '登录成功！',
        type: 'success',
      });
    } catch {
      ElMessage({
        message: '登录失败！',
        type: 'error',
      });
    }
  });
}
</script>

<template>
  <div class="login w-full h-full flex items-center justify-center">
    <div class="w-160 px-3 py-2 rounded shadow-lg bg-white">
      <div class="text-center mb-8">
        <h1 class="text-blue-400 text-3xl font-bold">
          {{ title }}
        </h1>
      </div>
      <el-form
        ref="loginFormRef"
        :model="form"
        :rules="rules"
        label-width="0"
        :inline="false"
        size="small"
      >
        <el-form-item prop="account">
          <el-input v-model="form.account" clearable placeholder="请输入账号">
            <template #prepend>
              <el-icon><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            clearable
            placeholder="请输入密码"
          >
            <template #prepend>
              <el-icon><key /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" @click="submit(form)">
            <span>登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
