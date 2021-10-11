// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFriendly from '../../../app/controller/friendly';
import ExportHome from '../../../app/controller/home';
import ExportTest from '../../../app/controller/test';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    friendly: ExportFriendly;
    home: ExportHome;
    test: ExportTest;
    user: ExportUser;
  }
}
