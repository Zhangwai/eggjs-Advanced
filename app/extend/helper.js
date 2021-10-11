// node.js 文件操作对象
const fs = require('fs');
// node.js 路径操作对象
const path = require('path');
module.exports.tools = {

  // 异步写法
  // 传入文件夹的路径看是否存在，存在不用管，不存在则直接创建文件夹
  /**
     * 判断文件夹是否存在，不存在可以直接创建
     * @param reaPath {String} 文件路径
     * @return {Promise<boolean>}
     */
  async exitsFolderAsync(reaPath) {
    const absPath = path.resolve(__dirname, reaPath);
    try {
      await fs.promises.stat(absPath);
    } catch (e) {
      // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
      await fs.promises.mkdir(absPath, { recursive: true });
    }
  },

  // 同步写法：
  async exitsFolderSync(reaPath) {
    const absPath = path.resolve(__dirname, reaPath);

    fs.stat(absPath, function(err, stats) {
      if (!stats) {
        fs.mkdir(absPath, { recursive: true }, err => {
          if (err) throw err;
        }); // Create dir in case not found
      }
    });
  },
  // jwt验证
  async apply(ctx, params = {}, exp = 60, secret = ctx.app.config.jwt.secret) {
    return ctx.app.jwt.sign(
      {
        data: params,
        // exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
        exp: Math.floor(Date.now() / 1000) + exp,
        // exp: Math.floor(Date.now() / 1000) + (10),
      },
      secret,
    );
  },


  // 随机生成n位验证码
  getVerificationCode(n) {
    const codes = [];
    // 数字
    for (let i = 48; i <= 57; i++) {
      codes.push(i);
    }
    // 大写字母
    for (let i = 65; i <= 90; i++) {
      codes.push(i);
    }
    // 小写字母
    for (let i = 97; i <= 122; i++) {
      codes.push(i);
    }
    const arr = [];
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 62);
      const char = String.fromCharCode(codes[index]);
      arr.push(char);
    }
    return arr.join('');
  },

};

module.exports.body = {
  // [GET]：服务器成功返回用户请求的数据
  SUCCESS({ ctx, res = null, msg = '请求成功', code = 0 }) {
    ctx.body = {
      code,
      data: res,
      msg,
    };
    ctx.status = 200;
  },

  // [POST/PUT/PATCH]：用户新建或修改数据成功。
  CREATED_UPDATE({ ctx, res = null, msg = '新建或修改数据成功' }) {
    ctx.body = {
      code: 0,
      data: res,
      msg,
    };
    ctx.status = 201;
  },

  /*
     * @description [DELETE]：用户删除数据成功。
     */
  NO_CONTENT({ ctx, res = null, msg = '删除数据成功' }) {
    ctx.body = {
      code: 0,
      data: res,
      msg,
    };
    ctx.status = 204;
  },

  // [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作
  INVALID_REQUEST({ ctx, res = null, msg = '请求有错误，服务器没有进行新建、修改、删除数据的操作', code = 400, status = 400 }) {
    ctx.body = {
      code,
      data: res,
      msg,
    };
    ctx.status = status;
  },

  // [*]：表示用户没有认证（令牌、用户名、密码错误）。
  UNAUTHORIZED({ ctx, res = null, msg = '没有认证（令牌、用户名、密码错误）', status = 401 }) {
    ctx.body = {
      code: 401,
      data: res,
      msg,
    };
    ctx.status = status;
  },

  // [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
  FORBIDDEN({ ctx, res = null, msg = '权限不足，访问被禁止' }) {
    ctx.body = {
      code: 403,
      data: res,
      msg,
    };
    ctx.status = 403;
  },

  // [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作
  NOT_FOUND({ ctx, res = null, msg = '资源未找到', status = 200 }) {
    ctx.body = {
      code: 404,
      data: res,
      msg,
    };
    ctx.status = status;
  },

  // [*] 参数发生验证错误。
  VALIDATION_FAILED({ ctx, res = null, msg = '参数发生验证错误' }) {
    ctx.body = {
      code: 422,
      data: res,
      msg,
    };
    ctx.status = 422;
  },
};
