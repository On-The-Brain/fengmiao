import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export function createApp() {
  
  const app = createSSRApp(App);
  // 创建 Pinia 实例
  const pinia = createPinia();
  // 使用 Pinia 插件
  pinia.use(piniaPluginPersistedstate);
  // 将 Pinia 添加到 Vue 应用
  app.use(pinia);
  return {
    app,
    pinia, // 返回 Pinia 实例
  };
}