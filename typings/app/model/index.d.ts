// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorizations = require('../../../app/model/authorizations');
import ExportProjects = require('../../../app/model/projects');
import ExportUsers = require('../../../app/model/users');
import ExportUserFriends = require('../../../app/model/user_friends');

declare module 'egg' {
  interface IModel {
    Authorizations: ReturnType<typeof ExportAuthorizations>;
    Projects: ReturnType<typeof ExportProjects>;
    Users: ReturnType<typeof ExportUsers>;
    UserFriends: ReturnType<typeof ExportUserFriends>;
  }
}
