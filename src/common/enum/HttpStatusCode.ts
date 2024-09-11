export enum HttpStatusCode {
    /**
     * 成功
     */
    OK = 200,
    /**
     * 未经授权的
     */
    UNAUTHORIZED = 401,
    /**
     * 没有找到
     */
    NOT_FOUND = 404,
    /**
     * 服务器内部错误
     */
    INTERNAL_SERVER_ERROR = 500,
    // 根据需要添加其他状态码
}
