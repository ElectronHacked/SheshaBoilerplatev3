import { IUserInfo } from './userInfo';
import { ITenantInfo } from './tenantInfo';
import { IApplicationInfo } from './application';

export interface ILoginInfo {
  user: IUserInfo;
  tenant: ITenantInfo;
  application: IApplicationInfo;
}
