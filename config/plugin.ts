import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
  //  鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  /**
 * 启用插件 egg-validate，用于参数验证
 */
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  /**
   * 发邮件
   */
  mailer: {
    enable: true,
    package: 'egg-mailer',
  },
  /**
   * socket.io
   */
  io : {
    enable: true,
    package: 'egg-socket.io',
  },
};

export default plugin;
