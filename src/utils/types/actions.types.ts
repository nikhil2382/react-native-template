import { TYPES } from 'actions/types';
import { ActionsInputTypes } from './actionInputs.types';

export type Action<T extends keyof ActionsInputTypes> =
  T extends keyof ActionsInputTypes
    ? { type: T }
    : { type: T; data: ActionsInputTypes[T] };

export type LogoutAction = Action<typeof TYPES.GENERAL.LOGOUT>;

export type HomeStartAction = Action<typeof TYPES.HOME.START>;
export type HomeSuccessAction = Action<typeof TYPES.HOME.SUCCESS>;
export type HomeFailureAction = Action<typeof TYPES.HOME.FAILURE>;

export type GeneralActions = LogoutAction;

export type HomeActions =
  | HomeStartAction
  | HomeSuccessAction
  | HomeFailureAction;
