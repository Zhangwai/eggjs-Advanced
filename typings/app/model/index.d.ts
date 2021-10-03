// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProjects = require('../../../app/model/projects');
import ExportUsers = require('../../../app/model/users');

declare module 'egg' {
  interface IModel {
    Projects: ReturnType<typeof ExportProjects>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
