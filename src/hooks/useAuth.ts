import React from 'react';
import useRedux from './useRedux';

import {useNavigation} from '@react-navigation/native';
import {logIn} from '../redux/slices/auth';

const defaultValue = {
  login: '',
  password: '',
};

const useAuth = () => {
  const [state, dispatch] = useRedux(({auth}: any) => auth);

  const [errors, setErrors] = React.useState({login: false, password: false});
  const [authState, setAuthState] = React.useState(defaultValue);

  const navigation = useNavigation();

  const onChangeValue = React.useCallback(
    (value, keyName) => {
      setAuthState(oldState => ({...oldState, [keyName]: value}));
    },
    [authState],
  );

  const onAllClear = () => {
    setAuthState(defaultValue);
    setErrors({login: false, password: false});
  };

  const onLogin = () => {
    const {login, password} = authState;

    console.log('errors:', errors);

    if (!login) {
      setErrors(errors => ({...errors, login: true}));
    } else {
      setErrors(errors => ({...errors, login: false}));
    }

    if (!password) {
      setErrors(errors => ({...errors, password: true}));
    } else {
      setErrors(errors => ({...errors, password: false}));
    }

    if (login && password) {
      dispatch(logIn(authState, navigation));
    }
  };

  const returnValues = {
    authState,
    onChangeValue,
    onAllClear,
    onLogin,
    errors,
  };
  return returnValues;
};

export default useAuth;
