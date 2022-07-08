import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },

  signInBox: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },

  text: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textColor1,
    marginVertical: 5,
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.black,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.textColor1,
  },

  passwordText: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: '400',
    marginVertical: 5,
  },

  loginTouchBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },

  loginText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },

  errorText: {
    color: COLORS.red,
    fontSize: 14,
    marginLeft: 2,
  },
});
