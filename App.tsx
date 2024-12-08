import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from 'navigation/navigation';
import { store, persistor } from './src/reducers/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
