import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/color';

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
  supportActive: {
    backgroundColor: COLORS.lightOrange,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 5
  },
  supportIsActive: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 5
  },
  supportTextActive: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.white,
  },
  supportTextIsActive: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textColor,
  }
});
