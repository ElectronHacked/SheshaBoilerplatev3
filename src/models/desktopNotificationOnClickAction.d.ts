import { ImsMouseClickEventTarget } from 'ims-types';
import { IDesktopNotificationAction } from 'models';

export interface IDesktopNotificationOnClickAction extends IDesktopNotificationAction {
  payload: {
    id: string;
    target: ImsMouseClickEventTarget;
  };
}
