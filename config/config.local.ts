import { EggAppConfig, PowerPartial } from 'egg';
const { v4: uuidv4 } = require('uuid');
export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.nunjucks = {
    throwOnUndefined: true, // 当输出为 null 或 undefined 会抛出异常
    trimBlocks: true, // 自动去除 block/tag 后面的换行符
    lstripBlocks: true, // 自动去除 block/tag 签名的空格
    cache: false, // 开启缓存
  },
    config.logger = {
      dir: './logs/local', // 打印目录重定向
      outputJSON: true, // json格式输出
      level: 'DEBUG',//打开debug级别日志，生产环境默认不打开
    };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: 'http://127.0.0.1:5500', // 匹配规则  域名+端口  *则为全匹配
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123',
    database: 'chat-dev',
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    define: { // model的全局配置
      timestamps: true, // 添加create,update,delete时间戳
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
      charset: 'utf8',
    },
  };
  config.passportGithub = {
    key: 'a8f447bb192505331380',
    secret: 'c5f2647c7fb387a54e62ff8603924340cb806f25',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],//这里我们可以做一些权限校验之类的操作
        packetMiddleware: ['packet'],// 通常用于对消息做预处理，又或者是对加密消息的解密等操作
      },
      generateId: req => {
        // 自定义 socket.id 生成函数
        // const data = qs.parse(req.url.split('?')[1]);
        return `${req._query.userId}_${uuidv4()}`; // custom id must be unique
      },
    },
  };

  return config;
};
