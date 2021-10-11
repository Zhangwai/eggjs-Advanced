

const { Controller } = require('egg');

/**
  * Controller 对客户端发送的 event 进行处理；由于其继承于 egg.Contoller, 拥有如下成员对象:
  *  ctx
  *  app
  *  service
  *  config
  *  logger
  */
class Chatroom extends Controller {

  /**
   * https://socket.io/docs/
   * Socket.io不是Websocket，它只是将Websocket和轮询 （Polling）机制以及其它的实时通信方式封装成了通用的接口，并且在服务端实现了这些实时机制的相应代码。
   * 也就是说，Websocket仅仅是 Socket.io实现实时通信的一个子集。因此Websocket客户端连接不上Socket.io服务端，当然Socket.io客户端也连接不上Websocket服务端。
   * github上面也有通过JS封装好的Websocket库，其中ws可用于client和基于node搭建的服务端使用，但是用起来相对繁琐，star相对Socket.io较少。
   */
  // socket.io server-side
  async sendMsg() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    const { id } = ctx.socket;
    await app.io.of('/').sockets[id].emit('returnMsg', `监听到自己的消息 :  ${message}`);
    console.log(message, '连接上了，在controller层');
    // message.username = ctx.session.username;
    if (ctx.session.currentRequestData) {
      const username = ctx.session.currentRequestData.userInfo.username;
      await app.io.of('/')
        .emit('returnMsg', `${username} :  ${message}`);
    }
  }
  async count() {
    const { ctx, app } = this;
    console.log(ctx.args);
    const count = await app.io.of('/').sockets.length;
    await app.io.of('/')
      .emit('count', `当前用户数量 :  ${count}`);
  }
  async chatToOne() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    const { id } = ctx.socket;
    console.log(message);
  }
}

module.exports = Chatroom;


// or async functions

// exports.ping = async function () {
//     const message = this.args[0];
//     await this.socket.emit('res', `Hi! I've got your message: ${message}`);
// };
