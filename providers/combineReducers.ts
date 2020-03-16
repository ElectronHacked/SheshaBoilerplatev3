import combineReducersHelper from 'react-combine-reducers';

export function combineReducers<T>(reducers) {
  const [rootReducerCombined, initialStateCombined] = combineReducersHelper(reducers);

  return [rootReducerCombined, initialStateCombined as T];
}
