import { HomeStartAction } from 'utils/types/actions.types';
import { TYPES } from './types';

export const sampleStart = (data: string): HomeStartAction => ({
  type: TYPES.HOME.START,
  data,
});

export const sampleSuccess = () => ({ type: TYPES.HOME.SUCCESS });

export const sampleFailure = () => ({ type: TYPES.HOME.START });
