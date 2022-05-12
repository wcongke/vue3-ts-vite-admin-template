<script setup lang="ts">
import { appStore } from '/@/store';
</script>

<template>
  <div class="p-2 text-center">
    <div>首页</div>
    <div>{{ appStore.ua.ua }}</div>
  </div>
</template>
