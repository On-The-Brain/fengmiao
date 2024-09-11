<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
    console.log('App Launch');
    console.log('当前环境:', import.meta.env.VITE_APP_ENV);
    console.log('服务地址:', import.meta.env.VITE_BASE_URL);
});

onShow(() => {
    console.log('App Show');
});

onHide(() => {
    console.log('App Hide');
});
</script>
<style>
@import url('static/icons/iconfont.css');
</style>
