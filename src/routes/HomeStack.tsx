import AccountView from '../screens/tabs/home/Account/view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AnalyticsView from '../screens/tabs/home/Analytics/view';
import BrandsView from '../screens/tabs/home/Brands/view';
import ErrorsOnComplaints from '../screens/tabs/home/ErrorsOnComplaints/view';
import LogoView from '../screens/tabs/home/Logo/view';
import OrdersView from '../screens/tabs/home/Orders/view';
import ProductCardsView from '../screens/tabs/home/Productcards/view';
import Productcards2View from '../screens/tabs/home/Productcards2/view';
import { ReviewsView } from '../screens/tabs/home/Reviews/view';
import SettingView from '../screens/tabs/home/Setting/view';
import Suppliers from '../screens/tabs/home/Suppliers/view';
import SupportView from '../screens/tabs/home/Support/view';
import SupporttView from '../screens/tabs/home/Supportt/view';
import EditMyProfile from '../screens/tabs/home/EditMyProfile/view';
import ByBuyers from '../screens/tabs/home/Orders/ByBuyers/view';
import Avatar from '../components/Avatar';
import LoginScreen from '../screens/tabs/home/Login/view';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Logo" component={LogoView} />
      <Stack.Screen name="Setting" component={SettingView} />
      <Stack.Screen name="ProductCards" component={ProductCardsView} />
      <Stack.Screen name="ProductCards2" component={Productcards2View} />
      <Stack.Screen name="Brands" component={BrandsView} />
      <Stack.Screen name="ErrorsOnComplaints" component={ErrorsOnComplaints} />
      <Stack.Screen name="Reviews" component={ReviewsView} />
      <Stack.Screen name="Support" component={SupportView} />
      <Stack.Screen name="Analytics" component={AnalyticsView} />
      <Stack.Screen name="OrdersView" component={OrdersView} />
      <Stack.Screen name="Supportt" component={SupporttView} />
      <Stack.Screen name="Suppliers" component={Suppliers} />
      <Stack.Screen name="AccountView" component={AccountView} />
      <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
      <Stack.Screen name="ByBuyers" component={ByBuyers} />
      <Stack.Screen name="Avatar" component={Avatar} />
    </Stack.Navigator>
  );
};

export default HomeStack;
