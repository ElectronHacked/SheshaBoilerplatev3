import { createAction } from 'redux-actions';
import { IRoute } from 'models';

export enum RouteActionEnums {
  GoingToRoute = 'GOING_TO_ROUTE',
}

export const goingToRouteAction = createAction<IRoute, string>(RouteActionEnums.GoingToRoute, nextRoute => ({
  nextRoute,
}));
