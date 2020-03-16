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

export interface IFlagsSetters<A extends string, B extends string, C extends string, D extends string> {
  setIsInProgressFlag: (key: { [key in A]?: boolean }) => void;
  setSucceededFlag: (key: { [key in B]?: boolean }) => void;
  setFailedFlag: (key: { [key in C]?: boolean }) => void;
  setActionedFlag: (key: { [key in D]?: boolean }) => void;
  resetIsInProgressFlag: () => void;
  resetSucceededFlag: () => void;
  resetFailedFlag: () => void;
  resetActionedFlag: () => void;
  resetAllFlag: () => void;
}

// export const getFlagsActions = ()

enum FlagsActionEnums {
  SetIsInProgressFlag = 'SET_IS_IN_PROGRESS_FLAG',
  SetSucceededFlag = 'SET_SUCCEEDED_FLAG',
  SetFailedFlag = 'SET_FAILED_FLAG',
  SetActionedFlag = 'SET_ACTIONED_FLAG',
  ResetIsInProgressFlags = 'RESET_IS_IN_PROGRESS_FLAGS',
  ResetSucceededFlags = 'RESET_SUCCEEDED_FLAGS',
  ResetFailedFlags = 'RESET_FAILED_FLAGS',
  ResetActionedFlags = 'RESET_ACTIONED_FLAGS',
  ResetAllFlags = 'RESET_ALL_FLAGS',
}

import camelcase from 'camelcase';
import { IFlagsState } from 'models';

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
  console.log('flagsReducer :', state);

  const flaggableMatch = /__F__/.exec(type);

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
    case FlagsActionEnums.SetIsInProgressFlag: {
      return {
        ...state,
        isInProgress: { ...state.isInProgress, ...payload.isInProgress },
      };
    }
    case FlagsActionEnums.SetSucceededFlag: {
      return {
        ...state,
        succeeded: { ...state.succeeded, ...payload.succeeded },
      };
    }
    case FlagsActionEnums.SetFailedFlag: {
      return {
        ...state,
        failed: { ...state.failed, ...payload.failed },
      };
    }
    case FlagsActionEnums.SetActionedFlag: {
      return {
        ...state,
        actioned: { ...state.actioned, ...payload.actioned },
      };
    }
    case FlagsActionEnums.ResetIsInProgressFlags:
      return {
        ...state,
        isInProgress: {},
      };
    case FlagsActionEnums.ResetSucceededFlags:
      return {
        ...state,
        succeeded: {},
      };
    case FlagsActionEnums.ResetFailedFlags:
      return {
        ...state,
        failed: {},
      };
    case FlagsActionEnums.ResetActionedFlags:
      return {
        ...state,
        actioned: {},
      };
    case FlagsActionEnums.ResetAllFlags:
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
