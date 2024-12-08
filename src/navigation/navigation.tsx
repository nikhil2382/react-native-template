import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from 'screens/home';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};
