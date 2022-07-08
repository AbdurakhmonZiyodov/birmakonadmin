import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  containerBoxText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textColor1,
  },
});
