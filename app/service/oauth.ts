import { Service } from 'egg';

/**
 * Test Service
 */
export default class OAuth extends Service {

    /**
     * 寻找是否注册过 本地或三方
     * 
     */
    public async getOAuthUser(user: { id?: string, provider: string, username?: string, password?: string }) {
        const { ctx } = this;
        const { provider } = user;
        if (provider === 'local') {
            const { username, password } = user;
            const data = await ctx.model.Users.findOne({
                where: {
                    username,
                    password
                },
                limit: 1
            })
            return data;
        } else if (provider === 'github') {
            const { id } = user
            const data = await ctx.model.Authorizations.findOne({
                where: {
                    uid: id,
                    provider
                },
                limit: 1
            });
            return data;
        }

    }

    /**
     * 用第三方注册用户
     * 
     */
    public async createOAuthUser(user: { id: string, provider: string, username: string }, options: {}) {
        const { ctx } = this;
        const { id, provider, username } = user;
        const data = await ctx.model.Authorizations.create({
            uid: id,
            provider,
            user_username: username
        },
            options
        );
        return data;
    }
}
