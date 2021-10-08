import { Service } from 'egg';

/**
 * Test Service
 */
export default class OAuth extends Service {

    /**
     * 寻找是否用第三方注册过
     * 
     */
    public async getOAuthUser(user: { id: string, provider: string }) {
        const { ctx } = this;
        const { id, provider } = user;
        const data = await ctx.model.Authorizations.findOne({
            where: {
                uid: id,
                provider
            },
            limit: 1
        });
        return data;
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
