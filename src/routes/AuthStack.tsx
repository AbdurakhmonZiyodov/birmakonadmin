import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/tabs/home/Login/view';
import MyTabs from './Tabs';
import useRedux from '../hooks/useRedux';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [state] = useRedux(state => state.auth);
  console.log(state);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {state.isAuthenticated ? (
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
