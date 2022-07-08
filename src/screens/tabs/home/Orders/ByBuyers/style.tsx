import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },

  ordersBox: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 200,
  },

  order: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.textColor1,
  },

  rowsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.orange,
    marginLeft: 5,
    marginTop: 10,
  },

  productInActiveBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
    marginLeft: 5,
    marginTop: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },

  productInActiveName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 10,
  },
});
