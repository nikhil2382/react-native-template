import { TYPES } from 'actions/types';

export interface ActionsInputTypes {
  [TYPES.GENERAL.LOGOUT]: undefined;

  [TYPES.HOME.START]: string;
  [TYPES.HOME.SUCCESS]: undefined;
  [TYPES.HOME.FAILURE]: undefined;
}
