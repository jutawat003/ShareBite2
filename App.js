
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './context/AppContext';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
