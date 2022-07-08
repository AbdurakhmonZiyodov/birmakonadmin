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
    marginTop: 15,
  },
  containerBoxText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textColor1,
  },
  containerBoxView: {
    marginLeft: 20,
    marginVertical: 25,
  },
  sectionText: {
    fontWeight: '600',
    fontSize: 20,
    color: COLORS.textColor1,
  },
  buttonView: {
    backgroundColor: COLORS.buttonColor,
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 20,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
  },
  buttonText1: {
    fontWeight: '500',
    fontSize: 12,
    color: COLORS.white,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 40,
    borderColor: COLORS.grey,
    marginTop: 10,
  },
  textinputView: {
    marginTop: 20,
  },
  textinputText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.grey,
    marginLeft: 20,
  },
  buttonsection: {
    backgroundColor: COLORS.buttonColor,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 60,
  },
  buttonsectionText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.grey,
  },
});
