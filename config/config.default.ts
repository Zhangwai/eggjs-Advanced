import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_zhangwai';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  // add your egg config in here
  config.middleware = [];

  config.jwt = {
    secret: 'zhangwai',
    // secret_refresh: 'zhangwai-refresh',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  config.session = {
    maxAge: 24 * 3600 * 1000, // ms
    // maxAge: 20 * 1000, // ms
    key: 'EGG_SESS',
    httpOnly: true,
    signed: false,
    encrypt: false,
    renew: true,//每次set倒计时重置
    // sameSite: null,
  };

  config.multipart = {
    // whitelist: [   // 只允许上传png格式
    //   '.png',
    // ],
    fileSize: '5mb',  // 最大5mb  
  };
  // console.log(process.env.MailerAuthUser,333333333333333333333)
  config.mailer = {
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      // user: process.env.MailerAuthUser, // generated ethereal user
      // pass: process.env.MailerAuthPass, // generated ethereal password
      user: '1519214533@qq.com', // generated ethereal user
      pass: 'mnqqdwwevztsbaea', // generated ethereal password
    }
  };

  /**
 * 接口安全配置
 */
  config.validate = {
    convert: true,// 对参数可以使用convertType规则进行类型转换
    widelyUndefined: true,
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    verification_mode: 'jwt',
    jwt_exp: 60 * 10, // jwt过期时间(秒)
    jwt_refresh_exp: 60 * 60 * 24 * 15, // refreshToken过期时间(秒)
    captcha_exp: 60 * 3,// captcha过期时间3分钟
    email_exp: 60,//email接口60秒发一次
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
