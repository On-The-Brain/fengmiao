import request from '@/utils/request';

export const login = (params: any) => {
    return request({
        url: '',
        method: 'GET',
        data: params,
        header: {}, // 自定义
    });
};
