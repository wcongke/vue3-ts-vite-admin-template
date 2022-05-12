import { toRefs } from 'vue';
import { defineStore } from 'pinia';
import UaParser from 'ua-parser-js';

export default defineStore('ua', () => {
  const res = new UaParser().getResult();

  return {
    ...toRefs(res),
  };
});
