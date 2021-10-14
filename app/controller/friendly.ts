import { Controller } from 'egg';

export default class FriendlyController extends Controller {
    /*
    *获取当前用户的全部好友信息
    */
    public async getFriends() {
        const { ctx } = this;
        console.log(ctx.query, ctx.session,222222222);
        // try {
        //     ctx.validate(ctx.rule.getFriendsRule, ctx.request.query)
        // } catch (error) {
        //     ctx.body = error
        //     return;
        // }
        const res =await ctx.service.friendly.getFriends();
        res ? ctx.helper.body.SUCCESS({ ctx, res }) : ctx.helper.body.NOT_FOUND({ ctx });
    }

    public async addFriends() {}
}
