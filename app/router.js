module.exports = app => {
  const { controller, router, io } = app;
  const github = (app).passport.authenticate('github', {
    // 用户登陆或者注册登陆成功后显示的前端页面地址
    successRedirect: 'http://127.0.0.1:8080/',
  });
  const localStrategy = app.passport.authenticate('local');

  /**
   * RESTful 风格接口与方法对应关系
   */
  // Method	  Path Simple       Route Name	Controller.Action
  // GET	    /posts	          posts	      app.controller.posts.index
  // GET	    /posts/new	      new_post	  app.controller.posts.new
  // GET	    /posts/:id	      post	      app.controller.posts.show
  // GET	    /posts/:id/edit	  edit_post	  app.controller.posts.edit
  // POST	    /posts	          posts	      app.controller.posts.create
  // PUT	    /posts/:id	      post	      app.controller.posts.update
  // DELETE	  /posts/:id	      post	      app.controller.posts.destroy

  // 注意ctx.session会根据127.0.0.1 和 localhost 不同而辨认出不同的客户端
  router.get('/', controller.home.index);
  router.post('/api/test', controller.test.index);

  /**
   * webSocket
   */
  const nsp = io.of('/');
  // socket, 指向app/io/controller/chat.js的index方法 , of 是划分命名空间
  // 对于在命名空间"/" 下,监听到的 sendMsg 事件将由 app.io.controller.chat.sendMsg 中 sendMsg 方法处理，
  // sendMsg 方法可以前端可以通过调用 socket.emit('sendMsg',{name:'jjj'}),可以将数据传递到app.io.controller.chat.sendMsg 中 sendMsg 方法中进行处理.
  nsp.route('sendMsg', io.controller.chat.sendMsg);// 群聊啊
  nsp.route('chatToOne', io.controller.chat.chatToOne);// 一对一聊天吧
  nsp.route('count', io.controller.chat.count);// 统计用户数量
  // nsp.route('ack', io.controller.index.ack);


  router.resources('user', '/api/user', controller.user);

  /**
   * 用户接口
   */
  router.post('/api/user/uploadAvatar', controller.user.uploadAvatar);// 上传头像
  router.post('/api/user/signIn', controller.user.signIn);// 登录
  router.post('/api/user/signUp', controller.user.signUp);// 注册
  router.get('/api/userInfo', controller.user.userInfo);// 获取用户信息
  router.get('/api/captcha', controller.user.captcha);// 获取验证图片
  router.post('/api/user/getMailCode', controller.user.getMailCode);// 获取验证邮箱验证码

  router.get('/passport/github', github);// bug未解决
  router.get('/passport/github/callback', github);// bug未解决
  router.post('/passport/local', localStrategy);// bug
  // app.passport.mount('github');//以上两语句的语法糖

  /**
   * 好友接口
   */
  router.get('/api/friendly/getfriends', controller.friendly.getFriends);// 获取好友列表

};
