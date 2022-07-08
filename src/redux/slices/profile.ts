import {createSlice} from '@reduxjs/toolkit';
import {services} from '../../services';
import {statusType} from '../types/statusType';

const defaultState = {
  user: undefined,
  isAuthenticated: false,
  profile: {status: statusType.idle},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: defaultState,
  reducers: {
    profileRequest: state => ({
      ...state,
      profile: {status: statusType.pending, error: undefined},
    }),

    profileSuccess: (state, action) => ({
      ...state,
      user: action.payload,
      profile: {status: statusType.resolved, error: undefined},
    }),

    profileFailure: (state, action) => ({
      ...state,
      profile: {status: statusType.rejected, error: action.payload},
    }),

    logoutAction: () => defaultState,
  },
});

export const {profileFailure, profileRequest, profileSuccess} =
  profileSlice.actions;

export const profile = (data: any) => async (dispatch: any) => {
  dispatch(profileRequest());
  console.log('>>>>>>>>>>profile reques<<<<<<<<<<<<');

  try {
    const res = await services.profile.profile(data);
    dispatch(profileSuccess(res.data));
    console.log('>>>>>>>>>profile success<<<<<<<<<<');
  } catch (error: any) {
    dispatch(profileFailure(error?.message));
    console.log('>>>>>>>>>>>>profile failure<<<<<<<<<<<<<<<');
    console.log('error:', error?.message);
    console.log(error);
  }
};

export default profileSlice.reducer;
