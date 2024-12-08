import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

export interface RootStateReducerType {
  home: typeof homeReducer;
}

const rootReducer = combineReducers<RootStateReducerType>({
  home: homeReducer,
});

export type RootStateReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
