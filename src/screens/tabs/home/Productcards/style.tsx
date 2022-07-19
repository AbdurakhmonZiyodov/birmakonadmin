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
    fontWeight: '500',
    fontSize: 18,
    color: COLORS.textColor1,
  },
  containerBoxView: {
    // marginHorizontal: 15,
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1
  },
  containerSectionText: {
    color: COLORS.white,
  },
  containerSectionView: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  containerInnerView: {
    marginHorizontal: 22,
    marginTop: 20,
  },
  containerInnerText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textColor1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginHorizontal: 16,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 15,
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.grey,
    paddingVertical: 10,
  },
  iconView: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  innerView: {
    backgroundColor: COLORS.buttonColor,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingVertical: 10,
    marginHorizontal: 2,
    marginRight: 2,
    // height: 40
  },
  innerText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
    flex: 1,
  },
  background: {
    height: 180,
    borderRadius: 15,
    marginBottom: 40,

    marginHorizontal: 7,
    width: 170,

    marginVertical: 10,
  },
  background1: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 180,
    width: 170,
  },
});
