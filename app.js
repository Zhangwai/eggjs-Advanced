const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');
const lodash = require('lodash');
const path = require('path');
const assert = require('assert');
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  // 配置文件已读取合并但还未生效，修改配置的最后时机，仅支持同步操作。
  configWillLoad() { }

  // 所有配置已经加载完毕，用于自定义 Loader 挂载。
  configDidLoad() {

    // 加载所有的校验规则
    const directory = path.join(this.app.config.baseDir, 'app/validate');
    this.app.loader.loadToApp(directory, 'validate');
  }

  // 插件的初始化
  async didLoad() { }

  // 所有插件启动完毕，用于做应用启动成功前的一些必须的前置操作。
  async willReady() {
    this.app.uuidv4 = uuidv4;
    this.app.dayjs = dayjs;
    this.app.lodash = lodash;
  }

  // 应用已经启动完毕，可以用于做一些初始化工作。
  async didReady() {
    const { app } = this;
    app.passport.verify(async (ctx, user) => {
      console.log(user, ctx, 11111111);
      // 检查用户
      const { provider, id, username, password } = user;
      assert(provider, 'user.provider should exists');
      if (provider === 'local') {
        // 本地鉴权
        assert(username, 'user.username should exists');
        assert(password, 'user.password should exists');
        const existsUser = await ctx.service.oauth.getOAuthUser(user);
        console.log(existsUser, 11111111);

      } else {
        // 第三方鉴权（有bug）
        assert(id, 'user.id should exists');
        // 从数据库中查找用户信息
        //
        // Authorization Table
        // column   | desc
        // ---      | --
        // provider | provider name, like github, twitter, facebook, weibo and so on
        // uid      | provider unique id
        // user_id  | current application user id
        try {
          const existsUser = await ctx.service.oauth.getOAuthUser(user);
          // 做缓存
          // 出现bug未来得及开发
          return existsUser;
        } catch (error) {
          // // 调用 service 注册新用户
          const userInfo = {
            username: uuidv4(),
            password: 'github.123456',
          };
          const newUser = await ctx.service.user.registerByGithub(userInfo, user);
          // 做缓存
          // 出现bug未来得及开发
          return newUser;
        }
      }

    });

    // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
    app.passport.serializeUser(async (ctx, user) => {
      // 处理 user
      // ...
      // return user;
    });

    // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
    app.passport.deserializeUser(async (ctx, user) => {
      // 处理 user
      // ...
      // return user;
    });
  }

  // Server 已经启动成功，可以开始导入流量，处理外部请求。
  async serverDidReady() {

  }

  // 应用即将关闭前
  async beforeClose() { }
}
module.exports = AppBootHook;
