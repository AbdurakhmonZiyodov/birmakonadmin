import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useRedux from '../hooks/useRedux';
import LoginScreen from '../screens/tabs/home/Login/view';
import MyTabs from './Tabs';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [state] = useRedux((state: any) => state.auth);
  console.log(state);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
      {state.isAuthenticated ? (
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
