<template>
    <view class="uno-m-5 uno-p-5 uno-rounded-lg uno-bg-white uno-shadow-lg uno-shadow-black/20">
        <uv-no-network
            @disconnected="disconnected"
            @connected="connected"
            @retry="retry"
        ></uv-no-network>
        <uv-form labelPosition="left" :model="loginForm" :rules="rules" ref="form">
            <view class="form-item-margin">
                <uv-form-item prop="userInfo.schoolCode" borderBottom>
                    <uv-input
                        placeholder="学校编号"
                        v-model="loginForm.userInfo.schoolCode"
                        border="none"
                    >
                        <template v-slot:prefix>
                            <uv-icon name="school" custom-prefix="custom-icon"></uv-icon>
                        </template>
                    </uv-input>
                </uv-form-item>
            </view>

            <view class="form-item-margin">
                <uv-form-item prop="userInfo.username" borderBottom>
                    <uv-input
                        placeholder="账号"
                        v-model="loginForm.userInfo.username"
                        border="none"
                    >
                        <template v-slot:prefix>
                            <uv-icon name="username" custom-prefix="custom-icon"></uv-icon>
                        </template>
                    </uv-input>
                </uv-form-item>
            </view>

            <view class="form-item-margin">
                <uv-form-item prop="userInfo.password" borderBottom>
                    <uv-input
                        placeholder="密码"
                        type="password"
                        v-model="loginForm.userInfo.password"
                        border="none"
                    >
                        <template v-slot:prefix>
                            <uv-icon name="password" custom-prefix="custom-icon"></uv-icon>
                        </template>
                    </uv-input>
                </uv-form-item>
            </view>

            <uv-button
                type="primary"
                text="提交"
                customStyle="margin-top: 10px"
                @click="onSubmit"
            ></uv-button>
        </uv-form>
    </view>
</template>
<script setup lang="ts">
import { reactive, onMounted, onUnmounted, ref } from 'vue';
const loginForm = reactive({
    userInfo: {
        schoolCode: '',
        username: '',
        password: '',
    },
});
const rules = {
    'userInfo.username': {
        type: 'string',
        required: true,
        message: '请填写用户名',
        trigger: ['blur', 'change'],
    },
    'userInfo.password': {
        type: 'string',
        required: true,
        message: '请填写密码',
        trigger: ['blur', 'change'],
    },
    'userInfo.schoolCode': {
        type: 'string',
        required: true,
        message: '请填写学校编号',
        trigger: ['blur', 'change'],
    },
};

const onSubmit = () => {};
// 页面周期函数--监听页面加载
const onLoad = () => {
    console.log('页面加载');
    // 执行加载逻辑
};

// 页面周期函数--监听页面初次渲染完成
const onReady = () => {
    console.log('页面初次渲染完成');
    // 执行初次渲染完成逻辑
};

// 页面周期函数--监听页面显示
const onShow = () => {
    console.log('页面显示');
    // 执行显示逻辑
};

// 页面周期函数--监听页面隐藏
const onHide = () => {
    console.log('页面隐藏');
    // 执行隐藏逻辑
};

// 页面周期函数--监听页面卸载
const onUnload = () => {
    console.log('页面卸载');
    // 执行卸载逻辑
};

// 生命周期函数
onMounted(() => {
    onLoad();
    onReady();
});

onUnmounted(() => {
    onUnload();
});
</script>

<style lang="scss" scoped>
.form-item-margin {
    margin-bottom: 15px;
}
</style>
