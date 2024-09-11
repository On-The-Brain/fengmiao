import { defineStore } from 'pinia'
import { ref } from 'vue'
 
export const useMemberStore = defineStore(
    'main',
    () => {
      //…省略
    },
    {
      // 配置持久化
      persist: {
        // 调整为兼容多端的API
        storage: {
          setItem(key, value) {
            uni.setStorageSync(key, value) 
          },
          getItem(key) {
            return uni.getStorageSync(key) 
          },
        },
      },
    },
  )