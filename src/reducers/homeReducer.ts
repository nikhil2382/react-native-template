import { TYPES } from '../actions/types';
import { HomeActions } from '../utils/types/actions.types';

export interface HomeStateType {
  status: null | string;
}

export const homeInitialState: HomeStateType = {
  status: null,
};

export default (state: HomeStateType, action: HomeActions): HomeStateType => {
  switch (action.type) {
    case TYPES.HOME.START: {
      return { ...state, status: action?.data };
    }

    default: {
      return { ...state };
    }
  }
};
