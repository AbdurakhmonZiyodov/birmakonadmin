import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BrandsView from './home/Brands/view';
import MyprofileView from './home/My profile/view';
import ProductCardsView from './home/Productcards/view';
import SupporttView from './home/Supportt/view';
import OrdersView from './home/Orders/view';
import AnalyticsView from './home/Analytics/view';

import {
  BasketIcon,
  HomeIcon,
  PulseIcon,
  SearchhIcon,
  UserIcon,
} from '../../assets/icons/icon';
import {COLORS} from '../../constants/color';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: COLORS.textColor,
        tabBarInactiveTintColor: COLORS.grey1,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({color}) => <Text style={{color}}>Главная</Text>,
          tabBarHideOnKeyboard: true,
        }}
        name="Home"
        component={BrandsView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SearchhIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({color}) => <Text style={{color}}>Заказы</Text>,
          tabBarHideOnKeyboard: true,
        }}
        name="Orders"
        component={AnalyticsView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <PulseIcon color={focused ? COLORS.textColor : COLORS.grey1} />
          ),
          tabBarLabel: ({color}) => <Text style={{color}}>Доб.товар</Text>,
          tabBarHideOnKeyboard: true,
        }}
        name="ext. product"
        component={OrdersView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <BasketIcon
              color={focused ? COLORS.textColor : COLORS.grey1}
              stroke={focused ? COLORS.textColor : COLORS.grey1}
            />
          ),
          tabBarLabel: ({color}) => <Text style={{color}}>Товары</Text>,
          tabBarHideOnKeyboard: true,
        }}
        name="Products"
        component={ProductCardsView}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <UserIcon
              fill={focused ? COLORS.textColor : COLORS.grey1}
              stroke={focused ? COLORS.textColor : COLORS.grey1}
            />
          ),
          tabBarLabel: ({color}) => <Text style={{color}}>Аккаунт</Text>,
          tabBarHideOnKeyboard: true,
        }}
        name="Account"
        component={SupporttView}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
