//#region Identifiers
export const IS_IN_PROGRESS_IDENTIFIER = 'I';

export const SUCCEEDED_IDENTIFIER = 'S';

export const FAILED_IDENTIFIER = 'F';

export const ACTIONED_IDENTIFIER = 'A';
//#endregion

//#region Flags
export const IS_IN_PROGRESS_FLAG = '_REQUEST';

export const SUCCEEDED_FLAG = '_SUCCESS';

export const FAILED_FLAG = '_FAILURE';

export const ACTIONED_FLAG = '_ACTION';
//#endregion

// export const getFlagsActions = ()

import camelcase from 'camelcase';
import { IFlagsState } from 'models';
import { FlagsActionTypes } from 'enums';

export const FLAGS_INITIAL_STATE: IFlagsState<any, any, any, any> = {
  isInProgress: {},
  succeeded: {},
  failed: {},
  actioned: {},
};

const hasFlag = (flags: string, flag: string) => new RegExp(flag, 'i').test(flags);

const isThisFlagAction = (type: string, flag: string) => new RegExp(flag, 'i').test(type);

const flagsReducer = (
  state: IFlagsState<any, any, any, any> = FLAGS_INITIAL_STATE,
  { type, payload }: ReduxActions.Action<IFlagsState<any, any, any, any>>
) => {
  const flaggableMatch = /__F__/.exec(type);

  // debugger;

  if (flaggableMatch) {
    // debugger;
    // This is a flaggable action, so we need to determinE what kind of flag it is so that we can update the state acordingly

    const FLAGS = type.split('__F__')[1];

    // ["FETCH_USER_SUCCESS", "FETCH_USER", "SUCCESS", index: 0, input: "FETCH_USER_SUCCESS__F__SA", groups: undefined]
    const actionMatch = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    const FLAG_ACTION_KEY = camelcase((actionMatch && actionMatch[1]) || ''); //  "FETCH_USER" => fetchUser

    const { isInProgress, succeeded, failed, actioned } = state;

    let currentState = { ...state };

    if (hasFlag(FLAGS, IS_IN_PROGRESS_IDENTIFIER) && isThisFlagAction(type, IS_IN_PROGRESS_FLAG)) {
      currentState = {
        ...state,
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: true },
        succeeded: { ...succeeded, [FLAG_ACTION_KEY]: false },
        failed: { ...failed, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, SUCCEEDED_IDENTIFIER) && isThisFlagAction(type, SUCCEEDED_FLAG)) {
      currentState = {
        ...state,
        succeeded: { ...succeeded, [FLAG_ACTION_KEY]: true },
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, FAILED_IDENTIFIER) && isThisFlagAction(type, FAILED_FLAG)) {
      currentState = {
        ...state,
        failed: { ...failed, [FLAG_ACTION_KEY]: true },
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, ACTIONED_IDENTIFIER) && isThisFlagAction(type, ACTIONED_FLAG)) {
      currentState = {
        ...state,
        actioned: { ...actioned, [FLAG_ACTION_KEY]: true },
      };
    }

    return currentState;
  }

  switch (type) {
    case FlagsActionTypes.SetIsInProgressFlag: {
      return {
        ...state,
        isInProgress: { ...state.isInProgress, ...payload.isInProgress },
      };
    }
    case FlagsActionTypes.SetSucceededFlag: {
      return {
        ...state,
        succeeded: { ...state.succeeded, ...payload.succeeded },
      };
    }
    case FlagsActionTypes.SetFailedFlag: {
      return {
        ...state,
        failed: { ...state.failed, ...payload.failed },
      };
    }
    case FlagsActionTypes.SetActionedFlag: {
      return {
        ...state,
        actioned: { ...state.actioned, ...payload.actioned },
      };
    }
    case FlagsActionTypes.ResetIsInProgressFlags:
      return {
        ...state,
        isInProgress: {},
      };
    case FlagsActionTypes.ResetSucceededFlags:
      return {
        ...state,
        succeeded: {},
      };
    case FlagsActionTypes.ResetFailedFlags:
      return {
        ...state,
        failed: {},
      };
    case FlagsActionTypes.ResetActionedFlags:
      return {
        ...state,
        actioned: {},
      };
    case FlagsActionTypes.ResetAllFlags:
      return {
        ...state,
        isInProgress: {},
        succeeded: {},
        failed: {},
        actioned: {},
      };
    default:
      return state;
  }
};

export default flagsReducer;
