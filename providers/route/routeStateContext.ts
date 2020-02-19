import { createContext } from 'react';

export interface IRouteStateContext {
  readonly nextRoute?: string;
}

export interface IRouteActionsContext {
  goingToRoute?: (route: string) => void;
}

export const defaultRouteContext: IRouteStateContext = {};

export const RouteStateContext = createContext<IRouteStateContext>(defaultRouteContext);

export const RouteActionsContext = createContext<IRouteActionsContext | undefined>(undefined);
