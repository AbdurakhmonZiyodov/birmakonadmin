import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import authReducer from './slices/auth';
import profile from './slices/profile';
import product from './slices/product';
import productCards from './slices/productCards';
import shopSeller from './slices/shopSeller';
import orders from './slices/orders';

// root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profile,
  product: product,
  productCards: productCards,
  shopSeller: shopSeller,
  orders: orders
});

const config = {
  key: 'root',
  storage: AsyncStorage,
  whilelist: ['auth'],
  blacklist: ['product', 'profile', 'productCards', 'shopSeller', 'orders'],
  debug: true,
};

const persistedReducer = persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // devTools:process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store, {});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type getStateType = () => RootState
export default store;
