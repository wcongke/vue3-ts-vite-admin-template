<script setup lang="ts">
import router from '/@/router';
</script>

<template>
  <div class="not-found text-center">
    <el-empty description="404 未知页面！" />
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
        @click="
          router.push({
            name: 'home',
          })
        "
      >
        <span>返回首页</span>
      </button>
    </div>
  </div>
</template>
