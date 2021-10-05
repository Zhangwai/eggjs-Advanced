import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_zhangwai';

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
  config.passportGithub = {
    key: 'a8f447bb192505331380',
    secret: '13fef2ea81fbec0a020a14798b58929201502219',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
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
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
