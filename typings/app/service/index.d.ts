// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportOauth from '../../../app/service/oauth';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';
import ExportToolsUerTool from '../../../app/service/tools/uerTool';

declare module 'egg' {
  interface IService {
    oauth: AutoInstanceType<typeof ExportOauth>;
    test: AutoInstanceType<typeof ExportTest>;
    user: AutoInstanceType<typeof ExportUser>;
    tools: {
      uerTool: AutoInstanceType<typeof ExportToolsUerTool>;
    }
  }
}
