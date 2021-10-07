import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

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
  
  //注意ctx.session会根据127.0.0.1 和 localhost 不同而辨认出不同的客户端
  router.get('/', controller.home.index);
  router.post('/api/test', controller.test.index);
  
  router.resources('user', '/api/user', controller.user);

  router.post('/api/user/uploadAvatar', controller.user.uploadAvatar);//上传头像
  router.post('/api/user/signIn', controller.user.signIn);//登录
  router.post('/api/user/signUp', controller.user.signUp);//注册
  router.get('/api/userInfo', controller.user.userInfo);//获取用户信息
  router.get('/api/captcha', controller.user.captcha);//获取验证图片
  router.post('/api/user/getMailCode', controller.user.getMailCode);//获取验证邮箱验证码
  
  const github = (app as any).passport.authenticate('github', {
    // 用户登陆或者注册登陆成功后显示的前端页面地址
    successRedirect: 'http://127.0.0.1:8080/',
  });
  router.get('/passport/github', github);
  router.get('/passport/github/callback', github);
};
