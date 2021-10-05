const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');
const lodash = require('lodash');
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  // 配置文件已读取合并但还未生效，修改配置的最后时机，仅支持同步操作。
  configWillLoad() { }

  // 所有配置已经加载完毕，用于自定义 Loader 挂载。
  configDidLoad() { }

  // 插件的初始化
  async didLoad() { }

  // 所有插件启动完毕，用于做应用启动成功前的一些必须的前置操作。
  async willReady() {
    this.app.uuidv4 = uuidv4;
    this.app.dayjs = dayjs;
    this.app.lodash = lodash;
  }

  // 应用已经启动完毕，可以用于做一些初始化工作。
  async didReady() { }

  // Server 已经启动成功，可以开始导入流量，处理外部请求。
  async serverDidReady() { }

  // 应用即将关闭前
  async beforeClose() { }
}
module.exports = AppBootHook;