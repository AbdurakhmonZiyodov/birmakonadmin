import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from '../../../../constants/color';
import useAuth from '../../../../hooks/useAuth';
import useRedux from '../../../../hooks/useRedux';
import { statusType } from '../../../../redux/types/statusType';
import { styles } from '../Login/style';

const LoginScreen = () => {
  const { onAllClear, onChangeValue, onLogin, authState, errors } = useAuth();
  const [state, dispatch] = useRedux(({ auth }) => auth);

  React.useEffect(() => {
    return () => onAllClear();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.signInBox}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.textInput}
          keyboardType={'default'}
          placeholder="Login"
          value={authState.login}
          onChangeText={login => onChangeValue(login, 'login')}
          placeholderTextColor={COLORS.grey5}
        />
        {errors.login ? <Text style={styles.errorText}>Error</Text> : null}
        <Text style={styles.text}>Парол</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ваш парол"
          placeholderTextColor={COLORS.grey5}
          returnKeyType="go"
          value={authState.password}
          onChangeText={password => onChangeValue(password, 'password')}
          secureTextEntry
          autoCorrect={false}
        />
        {errors.password ? <Text style={styles.errorText}>Error</Text> : null}
        <TouchableOpacity
          style={styles.loginTouchBtn}
          activeOpacity={0.8}
          onPress={onLogin}>
          {state.login.status === statusType.pending ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.loginText}>Пойти</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
