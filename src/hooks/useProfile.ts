import React from 'react';
import useRedux from './useRedux';

import {useNavigation} from '@react-navigation/native';
import {profile} from '../redux/slices/profile';

const defaultValue = {
  login: '',
  name: '',
  phone: '',
  email: '',
  addresses: '',
};

const useProfile = () => {
  const [state, dispatch] = useRedux(({profile}: any) => profile);

  const [profileState, setProfileState] = React.useState(defaultValue);

  const navigation = useNavigation();

  const onChangeValue = React.useCallback(
    (value, keyName) => {
      setProfileState(oldState => ({...oldState, [keyName]: value}));
    },
    [profileState],
  );

  const onAllClear = () => {
    setProfileState(defaultValue);
  };

  const onSubmit = () => {
    const {login, name, phone, email, addresses} = profileState;
    if (login && name && phone && email && addresses) {
      dispatch(profile(profileState));
    }
  };

  const returnValues = {
    profileState,
    onChangeValue,
    onAllClear,
    onSubmit,
  };
  return returnValues;
};

export default useProfile;
