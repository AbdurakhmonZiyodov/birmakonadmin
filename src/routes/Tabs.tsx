import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Pressable } from 'react-native';
import {
  BasketIcon,
  HomeIcon,
  PulseIcon,
  SearchhIcon,
  UserIcon,
} from '../assets/icons/icon';
import { COLORS } from '../constants/color';
import { useAppDispatch } from '../redux/hooks';
import { clearRequest } from '../redux/slices/product';
import AccountView from '../screens/tabs/home/Account/view';
import EditMyProfile from '../screens/tabs/home/EditMyProfile/view';
import OrdersView from '../screens/tabs/home/Orders/view';
import ProductCardsView from '../screens/tabs/home/Productcards/view';
import Productcards2View from '../screens/tabs/home/Productcards2/view';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.textColor,
        tabBarInactiveTintColor: COLORS.grey1,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Главная</Text>,
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchhIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Заказы</Text>,
        }}
        name="Orders"
        component={OrdersView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <PulseIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color }}>Доб.товар</Text>
          ),
        }}
        name="ext. product"
        component={Productcards2View}
      />
      <Tab.Screen

        options={{
          tabBarIcon: ({ focused }) => (
            <BasketIcon
              color={focused ? COLORS.textColor : COLORS.grey1}
              stroke={focused ? COLORS.textColor : COLORS.grey1}
            />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Товары</Text>,
        }}
        name="Products"
        component={ProductCardsView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              fill={focused ? COLORS.textColor : COLORS.grey1}
              stroke={focused ? COLORS.textColor : COLORS.grey1}
            />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Аккаунт</Text>,
        }}
        name="Account"
        component={EditMyProfile}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
