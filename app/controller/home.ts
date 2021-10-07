import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    //清空session
    ctx.session = null;
    console.log(ctx.session)
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
