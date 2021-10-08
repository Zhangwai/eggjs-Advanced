import { Controller } from 'egg';

export default class TestController extends Controller {
    public async index() {
        const { ctx, app } = this;
        console.log(ctx.session, 33333333);
        const user = {id:"111",provider:'github'}
        // const res = await ctx.service.oauth.getOAuthUser(user)
        // let user2 ={uid:"1111",provider:'github',user_username:'xiaotou123'}
        // const res = await ctx.service.oauth.createOAuthUser(user2)
        const userInfo = {
            username:app.uuidv4(),
            password: 'github.123456',
        };
        const res = ctx.service.user.registerByGithub(userInfo,user)
        console.log(res, 1111111111111)
        ctx.body = 'test'
    }
}
