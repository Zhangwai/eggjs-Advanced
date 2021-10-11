// 作用于每一个数据包（每一条消息）；在生产环境中，通常用于对消息做预处理，又或者是对加密消息的解密等操作
module.exports = app => {
  return async (ctx, next) => {
    console.log('packet:', ctx.packet);
    ctx.socket.emit('res', 'packet received!');
    await next();
  };
};
