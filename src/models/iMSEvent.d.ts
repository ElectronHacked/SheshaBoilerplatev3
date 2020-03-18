import { ImsMouseClickEventTarget, ImsMouseMoveEventTarget } from 'ims-types';

export interface IIMSEvent {
  readonly id?: string;
  readonly target: ImsMouseClickEventTarget | ImsMouseMoveEventTarget;
}
