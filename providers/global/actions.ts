import { createAction } from 'redux-actions';
import { IGlobalStateContext } from './contexts';

export enum GlobalActionEnums {
  ToggleHeaderVisibility = 'TOGGLE_HEADER_VISIBILITY',
}

export const toggleHeaderVisibilityAction = createAction<IGlobalStateContext, boolean>(
  GlobalActionEnums.ToggleHeaderVisibility,
  isHeaderShown => ({
    isHeaderShown,
  })
);
