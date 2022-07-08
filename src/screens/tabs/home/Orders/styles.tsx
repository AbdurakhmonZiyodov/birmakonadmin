import {StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 35,
  },

  styleOne: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonBox: {
    borderColor: '#fff',
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    marginLeft: 5,
    borderRadius: 5,
  },

  buttonBoxTwo: {
    paddingVertical: 10,
    borderColor: '#fff',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginLeft: 5,
    borderRadius: 5,
  },

  headerBox: {
    marginTop: 30,
  },

  scrollContainer: {
    flex: 1,
  },
});
