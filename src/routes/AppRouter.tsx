import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
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
