import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { services } from '../../services';
import { statusType } from '../types/statusType';

const defaultState = {
  user: undefined,
  isAuthenticated: false,
  login: { status: statusType.idle },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    loginReques: state => ({
      ...state,
      login: { status: statusType.pending, error: undefined },
    }),

    loginSuccess: (state, action) => ({
      ...state,
      user: action.payload.data,
      password: action.payload.password,
      isAuthenticated: true,
      login: { status: statusType.resolved, error: undefined },
    }),

    loginFailure: (state, action) => ({
      ...state,
      login: { status: statusType.rejected, error: action.payload },
    }),
    changePasswordAuth: (state, action: PayloadAction<string>) => ({
      ...state,
      password: action.payload
    }),
    logoutAction: () => defaultState,
  },
});

export const { loginFailure, loginReques, loginSuccess, logoutAction, changePasswordAuth } = authSlice.actions;

export const logIn = (data: any, navigation: any) => async (dispatch: any) => {
  dispatch(loginReques());
  console.log('>>>>>>>>>>login reques<<<<<<<<<<<<');

  try {
    const res = await services.auth.login(data);
    dispatch(loginSuccess({ data: res.data, password: data.password }));
    console.log('>>>>>>>>>login success<<<<<<<<<<');
    await navigation.navigate('HomeStack');
  } catch (error: any) {
    dispatch(loginFailure(error?.message));
    console.log('>>>>>>>>>>>>login failure<<<<<<<<<<<<<<<');
    console.log('error:', error?.message);
    console.log(error);
  }
};

export default authSlice.reducer;
