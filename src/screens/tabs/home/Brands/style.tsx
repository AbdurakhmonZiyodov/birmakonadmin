import React from 'react';
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
  containerSection: {
    marginLeft: 20,
    marginTop: 20,
  },
  containerSectionText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textColor1,
  },
  containerInnerText1: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.grey,
  },
  innerRow: {
    marginTop: 10,
    marginLeft: 25,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: COLORS.gray,
  },
  iconBox: {
    position: 'absolute',
    top: 10,
    right: 32,
  },
  productsCont: {
    marginTop: 35,
    marginHorizontal: 10,
  },
  rootView: {
    flex: 1
  }
});
