import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../index';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import rootSaga from 'sagas/index';

const persistConfig = {
  key: 'Persist Key',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
