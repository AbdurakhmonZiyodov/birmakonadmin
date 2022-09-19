import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';
import { navigationRef } from './RootNavigation';

const AppRouter = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppRouter;
