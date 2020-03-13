import { createContext } from 'react';

export interface IGlobalStateContext {
  readonly isHeaderShown?: boolean;
}

export interface IGlobalActionsContext {
  toggleHeaderVisibility: (value: boolean) => void;
}

export const defaultGlobalStateContext: IGlobalStateContext = { isHeaderShown: true };

export const GlobalStateContext = createContext<IGlobalStateContext>(defaultGlobalStateContext);

export const GlobalActionsContext = createContext<IGlobalActionsContext | undefined>(undefined);
