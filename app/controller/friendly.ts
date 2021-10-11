import { Controller } from 'egg';

export default class FriendlyController extends Controller {
    public async getFriends() {
        const { ctx } = this;
        console.log(ctx.query, 222222222);

        try {
            ctx.validate(ctx.rule.getFriendsRule, ctx.request.query)
        } catch (error) {
            ctx.body = error
            return;
        }
        const { username } = ctx.request.query;

        const res =await ctx.service.friendly.getFriends(username);

        ctx.body = {
            data:res,
            msg:'查询成功'
        }
    }
}
