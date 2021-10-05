import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async sayHi(name: string) {
        return `hi, ${name}`;
    }

    /**
     * 
     * 用户验证帐号密码
     */
    async login(payload: { username: string, password: string }) {
        const { ctx } = this;
        const { username, password } = payload;
        const user = await ctx.model.Users.findOne(
            {
                where: { username },
            }
        );
        if (!user) return {
            //用户不存在
            __code_wrong: 40004,
        }
        const res = await ctx.model.Users.findOne(
            {
                where: {
                    username,
                    password
                },
            }
        );
        if (!res) return {
            //密码不正确
            __code_wrong: 40000,
        }
        return await this.loginDeal(ctx, res);
    }

    /**
      * 登录用户，获取到user后处理
      */
    async loginDeal(ctx, user) {
        const { app } = ctx;
        if (user.state !== 1) {
            return {
                //帐号停用
                __code_wrong: 40005,
            }
        }
        user.update({
            last_login: app.dayjs()
                .format('YYYY-MM-DD HH:mm:ss'),
        });
        const currentRequestData = { userInfo: { id: user.id, username: user.username } };
        ctx.session.currentRequestData = currentRequestData;
        if (app.config.verification_mode === 'jwt') {
            return user
                ? {
                    accessToken: await ctx.helper.tools.apply(ctx, currentRequestData, app.config.jwt_exp),
                    // refreshToken: await ctx.helper.tools.apply(ctx, currentRequestData, app.config.jwt_refresh_exp, app.config.jwt.secret_refresh),
                    // csrf: ctx.csrf,
                }
                : null;
        }
        return user ? {} : null;
    }
    /**
  * 用户信息
  * @return {Promise<*>}
  */
    async userInfo() {
        const { ctx } = this;
        const res = await ctx.model.Users.findOne({
            where: { id: ctx.session.currentRequestData.userInfo.id },
            attributes: { exclude: ['password', 'deleted_at'] },
        });
        return res;
    }
    /**
     * 验证登录captcha
     */
    async checkCaptcha(captcha: string | null) {
        const { ctx } = this
        if (captcha) {
            if (captcha.toLowerCase() === ctx.session.captcha.text.toLowerCase() && ctx.session.captcha.expires > Math.floor(Date.now() / 1000)) {
                //验证通过
                return {
                    state: true,
                    msg: '验证通过'
                };
            } else {
                // 验证失败
                return {
                    state: false,
                    msg: '验证码错误或者过期，请刷新验证码重试'
                };
            }
        } else {
            return {
                state: false,
                msg: '验证码未输入，请输入验证码'
            };
        }
    }
}
