// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-view-nunjucks';
import 'egg-sequelize';
import 'egg-passport';
import 'egg-passport-github';
import 'egg-passport-local';
import 'egg-jwt';
import 'egg-cors';
import 'egg-validate';
import 'egg-mailer';
import 'egg-socket.io';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    nunjucks?: EggPluginItem;
    sequelize?: EggPluginItem;
    passport?: EggPluginItem;
    passportGithub?: EggPluginItem;
    passportLocal?: EggPluginItem;
    jwt?: EggPluginItem;
    cors?: EggPluginItem;
    validate?: EggPluginItem;
    mailer?: EggPluginItem;
    io?: EggPluginItem;
  }
}