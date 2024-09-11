// request.ts
import { HttpStatusCode } from '@/common/enum/HttpStatusCode';

// 请求参数接口定义
interface RequestParams {
    url: string;
    method?: 'GET' | 'POST'; // 修改为大写
    data?: any;
    header?: Record<string, string>;
}

// 响应数据接口定义（可以根据实际情况进行扩展）
interface ResponseData {
    // 根据你的实际需求定义相应的字段
    [key: string]: any;
}
// 全局请求封装
const base_url = import.meta.env.VITE_BASE_URL;
// 请求超时
const timeout = 5000;

export default (params: RequestParams): Promise<ResponseData> => {
    let url = params.url;
    let method = params.method?.toUpperCase() || 'GET'; // 转换为大写
    let data = params.data || {};
    let header: Record<string, string> = {
        'Blade-Auth': uni.getStorageSync('token') || '',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0',
        'Tenant-Id': uni.getStorageSync('tenantId') || 'xxx', // avue配置相关
        ...params.header,
    };

    if (method === 'POST') {
        header = {
            'Content-Type': 'application/json',
        };
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: base_url + url,
            method: method as
                | 'OPTIONS'
                | 'GET'
                | 'HEAD'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'TRACE'
                | 'CONNECT', // 强制转换为符合要求的类型
            header: header,
            data: data,
            timeout: timeout,
            success(response) {
                const res = response as { statusCode: number; data: ResponseData };
                // 根据返回的状态码做出对应的操作
                if (res.statusCode === HttpStatusCode.OK) {
                    resolve(res.data);
                } else {
                    uni.clearStorageSync();
                    switch (res.statusCode) {
                        case HttpStatusCode.UNAUTHORIZED:
                            uni.showModal({
                                title: '提示',
                                content: '请登录',
                                showCancel: false,
                                success() {
                                    setTimeout(() => {
                                        uni.navigateTo({
                                            url: '/pages/login/index',
                                        });
                                    }, 1000);
                                },
                            });
                            break;
                        case HttpStatusCode.NOT_FOUND:
                            uni.showToast({
                                title: '请求地址不存在...',
                                duration: 2000,
                            });
                            break;
                        default:
                            uni.showToast({
                                title: '请重试...',
                                duration: 2000,
                            });
                            break;
                    }
                }
            },
            fail(err) {
                console.log(err);
                if (err.errMsg.indexOf('request:fail') !== -1) {
                    uni.showToast({
                        title: '网络异常',
                        icon: 'error',
                        duration: 2000,
                    });
                } else {
                    uni.showToast({
                        title: '未知异常',
                        duration: 2000,
                    });
                }
                reject(err);
            },
            complete() {
                // 不管成功还是失败都会执行
                uni.hideLoading();
                uni.hideToast();
            },
        });
    });
};
