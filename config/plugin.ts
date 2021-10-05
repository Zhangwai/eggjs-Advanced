import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
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
};

export default plugin;
