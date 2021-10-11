// 在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，
// 对认证失败的客户端做出相应的处理
module.exports = app => {
  return async (ctx, next) => {
    // 这块触发的是系统事件connect
    console.log('>>>客户端新上线用户连接成功');
    const { socket, logger } = ctx;
    const nsp = app.io.of('/');
    const { id } = ctx.socket;
    let username;
    if (ctx.session.currentRequestData) {
      username = ctx.session.currentRequestData.userInfo.username;
      // const count = nsp.sockets.size;
      console.log(username, '已经登录');
      // await nsp.emit('count', `当前用户数量 :  ${count}`);
      // 广播向所有socket连接
      await socket.broadcast.emit('other', `${username} 已经上线！`);
      // 给自己发一份上线通知
      await socket.emit(id, `${username} 监听自己的上线通知！`);
    } else {
      console.log('用户未登录');
      await socket.emit(id, '用户未登录');
      await socket.disconnect();
    }

    await next();
    // //这块触发的是系统事件disconnect
    await socket.broadcast.emit('other', `${username} 已经下线！`);
    console.log('disconnection!');
  };
};
