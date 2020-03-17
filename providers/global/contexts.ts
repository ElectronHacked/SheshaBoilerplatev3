import { createContext } from 'react';
import { IFlagsState, IFlagsSetters } from 'models';
import { FLAGS_INITIAL_STATE } from 'providers/utils/flagsReducer';

export type IFlagProgressFlags = 'fetchPosts' | 'fetchUsers';
export type IFlagSucceededFlags = 'fetchPosts';
export type IFlagFailedFlags = 'fetchPosts';
export type IFlagActionedFlags = 'fetchPosts';

export interface IGlobalStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  readonly isHeaderShown?: boolean;
}

export interface IGlobalActionsContext
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  toggleHeaderVisibility: (value: boolean) => void;
  fetchPosts: () => void;
  fetchPostsSuccess: () => void;
}

export const defaultGlobalStateContext: IGlobalStateContext = { isHeaderShown: true, ...FLAGS_INITIAL_STATE };

export const GlobalStateContext = createContext<IGlobalStateContext>(defaultGlobalStateContext);

export const GlobalActionsContext = createContext<IGlobalActionsContext | undefined>(undefined);
