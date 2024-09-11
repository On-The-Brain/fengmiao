import { defineConfig, loadEnv } from 'vite';
import postcssConfig from './postcss.config';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  // 手动加载 src/environment 中的环境文件
  const env = loadEnv(mode, path.resolve(process.cwd()));

  return {
    build: {
      // 根据环境区分 sourcemap 配置
      sourcemap: env.VITE_APP_ENV === 'development',
    },
    css: {
      postcss: postcssConfig,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [
      uni(),
      Unocss({ mode: "vue-scoped" }),
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-import.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
    ],
    define: {
      'process.env': env, // 注入环境变量
    },
  };
});