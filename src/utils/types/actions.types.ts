import { TYPES } from 'actions/types';

export type Action<T, D = undefined> = D extends undefined
  ? { type: T }
  : { type: T; data: D };

export type LogoutAction = Action<typeof TYPES.GENERAL.LOGOUT>;

export type HomeStartAction = Action<typeof TYPES.HOME.START, string>;
export type HomeSuccessAction = Action<typeof TYPES.HOME.SUCCESS>;
export type HomeFailureAction = Action<typeof TYPES.HOME.FAILURE>;

export type GeneralActions = LogoutAction;

export type HomeActions =
  | HomeStartAction
  | HomeSuccessAction
  | HomeFailureAction;
