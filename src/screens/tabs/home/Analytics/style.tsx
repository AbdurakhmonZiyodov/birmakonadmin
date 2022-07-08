import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  containerBoxText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textColor1,
  },
  elevition: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 30,
    // marginHorizontal: 6,
    flex: 1,
  },
  sectionView: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  endView: {
    marginBottom: 40,
  },

  pieChartImg: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
});
