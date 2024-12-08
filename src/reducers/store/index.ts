import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../index';
import { persistReducer, persistStore } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';

const persistConfig = {
  key: 'Persist Key',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
