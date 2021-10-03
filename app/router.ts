import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.resources('user', '/api/user', controller.user);

  const github = (app as any).passport.authenticate('github', {
    // 用户登陆或者注册登陆成功后显示的前端页面地址
    successRedirect: 'http://127.0.0.1:8080/',
  });
  router.get('/passport/github', github);
  router.get('/passport/github/callback', github);
};
