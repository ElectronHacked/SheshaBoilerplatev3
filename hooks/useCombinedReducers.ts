export const useCombinedReducers = reducersObject => {
  const state = Object.keys(reducersObject).reduce(
    (stateObj, key) => ({ ...stateObj, [key]: reducersObject[key][0] }),
    {}
  );

  type Dispatch = (action: any) => void;

  const dispatch = action =>
    Object.keys(reducersObject)
      .map(key => reducersObject[key][1])
      .forEach(func => func(action));

  return [state, dispatch as Dispatch];
};
