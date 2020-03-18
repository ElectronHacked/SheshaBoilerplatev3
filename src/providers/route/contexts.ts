import { createContext } from 'react';
import { IFlagsState, IFlagsSetters } from 'models';

export type IFlagProgressFlags = '__DEFAULT__' /* NEW_IN_PROGRESS_FLAG_GOES_HERE */;
export type IFlagSucceededFlags = '__DEFAULT__' /* NEW_SUCCEEDED_FLAG_GOES_HERE */;
export type IFlagErrorFlags = '__DEFAULT__' /* NEW_ERROR_FLAG_GOES_HERE */;
export type IFlagActionedFlags = '__DEFAULT__' /* NEW_ACTIONED_FLAG_GOES_HERE */;

export interface IRouteStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
  readonly nextRoute?: string;
}

export interface IRouteActionsContext
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
  goingToRoute?: (route: string) => void;
}

export const defaultRouteContext: IRouteStateContext = {};

export const RouteStateContext = createContext<IRouteStateContext>(defaultRouteContext);

export const RouteActionsContext = createContext<IRouteActionsContext | undefined>(undefined);
