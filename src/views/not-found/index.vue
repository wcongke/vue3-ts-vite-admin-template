<template>
  <div class="not-found text-center">
    <div class="pt-10 mb-2">
      <span class="text-8xl font-bold text-gray-600">404</span>
    </div>
    <div class="mb-8">
      <span class="text-2xl text-gray-600">未知页面!</span>
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
        @click="
          $router.push({
            name: 'home',
          })
        "
      >
        <span>返回首页</span>
      </button>
    </div>
  </div>
</template>
