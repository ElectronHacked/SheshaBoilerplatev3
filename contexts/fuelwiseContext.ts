import { createContext } from 'react';

export interface IFuelWiseState {
  isFetchingTips?: boolean;
}

export interface IFuelWiseAction {
  fetchTips?: () => void;
}

export const FuelWiseStateContext = createContext({});

export const FuelWiseActionContext = createContext({});
