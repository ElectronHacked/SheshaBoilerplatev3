import { createContext } from 'react';
import { IFlagsState, IFlagsSetters } from 'models';
import { FLAGS_INITIAL_STATE } from 'providers/utils/flagsReducer';

export type IFlagProgressFlags = 'fetchPosts' /* NEW_IN_PROGRESS_FLAG_GOES_HERE */;
export type IFlagSucceededFlags = 'fetchPosts' /* NEW_SUCCEEDED_FLAG_GOES_HERE */;
export type IFlagErrorFlags = 'fetchPosts' /* NEW_ERROR_FLAG_GOES_HERE */;
export type IFlagActionedFlags = 'fetchPosts' /* NEW_ACTIONED_FLAG_GOES_HERE */;

export interface IGlobalStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
  readonly isHeaderShown?: boolean;
}

export interface IGlobalActionsContext
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
  toggleHeaderVisibility: (value: boolean) => void;
  fetchPosts: () => void;
  fetchPostsSuccess: () => void;
}

export const defaultGlobalStateContext: IGlobalStateContext = { isHeaderShown: true, ...FLAGS_INITIAL_STATE };

export const GlobalStateContext = createContext<IGlobalStateContext>(defaultGlobalStateContext);

export const GlobalActionsContext = createContext<IGlobalActionsContext | undefined>(undefined);
