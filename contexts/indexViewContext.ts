import { createContext } from 'react';

export interface IIndexViewStateContext {
  isFiltering?: boolean;
  isSelectingColumns?: boolean;
}
export interface IIndexViewActionsContext {
  toggleIsSelectingColumns?: (val: boolean) => void;
  toggleIsFiltering?: (filtering: boolean) => void;
}

export const defaultIndexViewStateContext: IIndexViewStateContext = { isFiltering: null, isSelectingColumns: null };

export const IndexViewStateContext = createContext<IIndexViewStateContext>(defaultIndexViewStateContext);
export const IndexViewActionsContext = createContext<IIndexViewActionsContext | undefined>(undefined);
