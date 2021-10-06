//node.js 文件操作对象
const fs = require('fs');
//node.js 路径操作对象
const path = require('path');
const Controller = require('egg').Controller;
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
//还有我们这里使用了egg-multipart
const md5 = require('md5');
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.Users.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Users.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    const user = await ctx.model.Users.create({ username, password });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.Users.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { username, password } = ctx.request.body;
    await user.update({ username, password });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.Users.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
  /**
   * @description 上传头像
   * @router /api/user/upload
   */
  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = md5(stream.filename + new Date()) +
      path.extname(stream.filename)//取出后缀名.jpg
        .toLocaleLowerCase();
    //文件生成绝对路径
    const targetDir = path.join(this.config.baseDir, 'app/public/avatars/datou');
    //查看文件夹是否存在不存在就生成
    await ctx.helper.tools.exitsFolderAsync(targetDir);
    const target = path.join(targetDir, filename);
    //生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }
    await ctx.model.Users.update({ avatar: '/public/avatars/datou/' + filename }, {
      where: {
        username: 'datou'
      }
    })
    //文件响应
    ctx.body = {
      url: '/public/avatars/datou/' + filename,
      mag: 'ok'
    };
  }
  /**
   * @description 登录
   * @router /api/user/signIn
   */
  async signIn() {
    const { ctx } = this;
    try {
      ctx.validate(ctx.rule.loginRole, ctx.request.body)
    } catch (error) {
      ctx.body = error
      return;
    }

    const { username, password, captcha } = ctx.request.body;
    let captchaState = await ctx.service.user.checkCaptcha(captcha);
    if (!captchaState.state) {
      ctx.helper.body.VALIDATION_FAILED({ ctx, res: null, msg: captchaState["msg"] });
    } else {
      const res = await ctx.service.user.login({ username, password });
      switch (res.__code_wrong) {
        case undefined:
          ctx.helper.body.SUCCESS({ ctx, res });
          break;
        case 40000:
          ctx.helper.body.INVALID_REQUEST({ ctx, code: 40000, msg: '密码错误' });
          break;
        case 40004:
          ctx.helper.body.INVALID_REQUEST({
            ctx,
            code: 40004,
            msg: '用户不存在',
          });
          break;
        case 40005:
          ctx.helper.body.INVALID_REQUEST({
            ctx,
            code: 40005,
            msg: '账号已停用',
          });
          break;
        default:
          ctx.helper.body.UNAUTHORIZED({ ctx });
          break;
      }
    }
  }
  /**
   * @description 注册
   * @router /api/user/signUp
   */
  async signUp() {
  }

  /**
   * @description 发送验证码
   * @router /api/captcha
   */
  async captcha() {
    const { ctx } = this;
    const captchaObj = await ctx.service.tools.uerTool.getCaptcha();
    ctx.session.captcha = {
      text: captchaObj.text,
      expires: Math.floor(Date.now() / 1000) + ctx.app.config.captcha_exp,
    }; //文本信息存到会话中的captcha属性中
    ctx.set("Content-Type", "image/svg+xml");
    ctx.body = captchaObj.data;
  }

  /**
 * @apikey
 * @summary 获取 用户信息
 * @description 获取 用户信息
 * @router get /api/user/userInfo
 */
  async userInfo() {
    const { ctx } = this;
    const res = await ctx.service.user.userInfo();
    res ? ctx.helper.body.SUCCESS({ ctx, res }) : ctx.helper.body.NOT_FOUND({ ctx });
  }

}

module.exports = UserController;
