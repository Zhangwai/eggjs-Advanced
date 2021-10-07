const userRule = {
    userId: {
        id: { type: 'number', required: true, description: 'id' },
    },
    loginRole: {
        username: {
            type: 'string',
            required: true,
            min: 2,
            max: 60,
            trim: true,
            example: 'Imfdj',
            description: '用户名',
        },
        password: {
            type: 'string',
            required: true,
            min: 3,
            max: 30,
            trim: true,
            example: '123123',
            description: '用户密码',
        },
        captcha: {
            type: 'string',
            required: true,
            example: 'wfsa',
            description: '验证码',
        },
    },
    emailRule: {
        email: {
            type: 'string',
            required: true,
            max: 60,
            trim: true,
            format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            example: '1@qq.com',
            description: '邮箱',
        }
    },
    registerRule: {
        username: {
            type: 'string',
            required: true,
            min: 2,
            max: 60,
            trim: true,
            example: 'Imfdj',
            description: '用户名',
        },
        password: {
            type: 'string',
            required: true,
            min: 3,
            max: 30,
            trim: true,
            example: '123123',
            description: '用户密码',
        },
        email: {
            type: 'string',
            required: true,
            max: 60,
            trim: true,
            format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            example: '1@qq.com',
            description: '邮箱',
        },
        code: {
            type: 'string',
            required: true,
            max: 10,
            format: /^[a-zA-Z\d]+$/,
            example: '1Xtu',
            description: '邮箱验证码',
        }
    },
}
module.exports = {
    ...userRule,

}