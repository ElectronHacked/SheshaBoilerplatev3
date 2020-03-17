import { createContext } from 'react';
import { IFlagsState, IFlagsSetters } from 'models';

export type IFlagProgressFlags = '__DEFAULT__';
export type IFlagSucceededFlags = '__DEFAULT__';
export type IFlagErrorFlags = '__DEFAULT__';
export type IFlagActionedFlags = '__DEFAULT__';

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
