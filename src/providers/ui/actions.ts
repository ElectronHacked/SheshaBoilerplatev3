import { createAction } from 'redux-actions';
import { IUiStateContext, ControlSize } from './contexts';

export enum UiActionsEnums {
  SetControlsSize = 'SET_CONTROLS_SIZE',
}

export const setControlsSizeAction = createAction<IUiStateContext, ControlSize>(
  UiActionsEnums.SetControlsSize,
  size => ({
    size,
  })
);
