import { createAction } from 'redux-actions';
import { IUiStateContext, ControlSize } from './contexts';

export enum UiActionsEnums {
  SetControlsSize = 'SET_CONTROLS_SIZE',
  /* NEW_ACTION_TYPE_GOES_HERE */
}

export const setControlsSizeAction = createAction<IUiStateContext, ControlSize>(
  UiActionsEnums.SetControlsSize,
  size => ({
    size,
  })
);

/* NEW_ACTION_GOES_HERE */
