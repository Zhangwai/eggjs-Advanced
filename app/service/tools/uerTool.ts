import { Service } from 'egg';
const svgCaptcha = require('svg-captcha');
export default class toolService extends Service {
    //注册检查重复用户名
    async DuplicateUser(username: string) {
        const { ctx } = this;
        const res = await ctx.model.Users.findOne({
            where: { username },
            limit: 1
        });
        // console.log(res)//null
        return res;
    }
    //检查邮箱是否重复
    async DuplicateEmail(email: string) {
        const { ctx } = this;
        const res = await ctx.model.Users.findOne({
            where: { email },
            limit: 1
        });
        return res;
    }
    //发送验证码
    async getCaptcha() {
        const captchaObj = svgCaptcha.create(); //captcha = {text,data}
        return captchaObj
    }
}