import { log } from "console";

//node.js 文件操作对象
const fs = require('fs');
//node.js 路径操作对象
const path = require('path');
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
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    console.log(ctx.session, 'ooooo')
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
    const res = await ctx.service.user.login({ username, password, captcha });
    switch (res.__code_wrong) {
      case undefined:
        ctx.helper.body.SUCCESS({ ctx, res });
        break;
      case 40000:
        ctx.helper.body.INVALID_REQUEST({ ctx, code: 40000, msg: '密码错误' });
        break;
      case 40004:
        ctx.helper.body.INVALID_REQUEST({ ctx, code: 40004, msg: '用户不存在' });
        break;
      case 40005:
        ctx.helper.body.INVALID_REQUEST({ ctx, code: 40005, msg: '账号已停用' });
        break;
      case 40001:
        ctx.helper.body.INVALID_REQUEST({ ctx, code: 40001, msg: res.msg });
        break;
      default:
        ctx.helper.body.UNAUTHORIZED({ ctx });
        break;
    }
  }
  /**
   * @description 注册
   * @router /api/user/signUp
   */
  async signUp() {
    const { ctx } = this;
    try {
      ctx.validate(ctx.rule.registerRule, ctx.request.body);
    } catch (error) {
      ctx.body = error
      return
    }
    const { username, password, email, code } = ctx.request.body;
    const res = await ctx.service.user.register({ username, password, email, code });
    switch (res.__code_wrong) {
      case undefined:
        ctx.helper.body.CREATED_UPDATE({ ctx, res });
        break;
      case 40000:
        ctx.helper.body.VALIDATION_FAILED({ ctx, res: null, msg: '验证码不正确或者邮箱不正确' });
        break;
      case 40001:
        ctx.helper.body.VALIDATION_FAILED({ ctx, res: null, msg: '用户名重复' });
        break;
      case 40002:
        ctx.helper.body.VALIDATION_FAILED({ ctx, res: null, msg: '邮箱重复' });
        break;
      default:
        ctx.helper.body.NOT_FOUND({ ctx });
        break;
    }
  }

  /**
   * @description 上传头像
   * @router /api/user/uploadAvatars
   */
  async uploadAvatar() {
    const { ctx } = this;
    let username = null;
    if (ctx.session.currentRequestData) {
      username = ctx.session.currentRequestData.userInfo.username;
      const stream = await ctx.getFileStream();
      const filename = md5(stream.filename + new Date()) +
        path.extname(stream.filename)//取出后缀名.jpg
          .toLocaleLowerCase();
      //文件生成绝对路径
      const targetDir = path.join(this.config.baseDir, `app/public/avatars/${username}`);
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
      await ctx.service.user.updateAvatars(username, filename);
      //文件响应
      ctx.body = {
        url: `/public/avatars/${username}` + filename,
        mag: 'ok'
      };
    } else {
      ctx.helper.body.NOT_FOUND({ ctx, res: null, msg: '用户未登录' });
    }
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
    console.log(ctx.session, 'tests');
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

  /**
* @apikey
* @summary 获取 邮箱验证码
* @description 获取 邮箱验证码
* @router get /api/user/getMailCode
*/
  async getMailCode() {
    const { ctx } = this;
    try {
      ctx.validate(ctx.rule.emailRule, ctx.request.body);
    } catch (error) {
      ctx.body = error
      return
    }
    const { email } = ctx.request.body;
    //获取4位密码
    const code = ctx.helper.tools.getVerificationCode(4);
    const res = await ctx.service.user.getMailCode({ email, code });
    switch (res.__code_wrong) {
      case 40000:
        ctx.helper.body.NOT_FOUND({ ctx, res, msg: '邮箱发送失败', status: 200 });
        break;
      case 40001:
        ctx.helper.body.NOT_FOUND({ ctx, res, msg: '操作频繁,60s后重试', status: 200 });
        break;
      case 40002:
        ctx.helper.body.NOT_FOUND({ ctx, res, msg: '邮箱已经被注册', status: 200 });
        break;
      default:
        ctx.helper.body.SUCCESS({ ctx, res, msg: '邮件发送成功请注意查收', code: 0 });
        break;
    }
  }
}

module.exports = UserController;
