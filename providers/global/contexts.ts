import { createContext } from 'react';
import { IFlagsState } from 'models';

export type IFlagProgressFlags = 'fetchPosts';
export type IFlagSucceededFlags = 'fetchPosts';
export type IFlagFailedFlags = 'fetchPosts';
export type IFlagActionedFlags = 'fetchPosts';

export interface IGlobalStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  readonly isHeaderShown?: boolean;
}

export interface IGlobalActionsContext {
  toggleHeaderVisibility: (value: boolean) => void;
}

export const defaultGlobalStateContext: IGlobalStateContext = { isHeaderShown: true };

export const GlobalStateContext = createContext<IGlobalStateContext>(defaultGlobalStateContext);

export const GlobalActionsContext = createContext<IGlobalActionsContext | undefined>(undefined);
