import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/color';

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerSectionView1: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  containerSectionView: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionBoxText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.black,
  },

  input: {
    marginVertical: 10,
    borderColor: 'red',
    borderRadius: 7,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: COLORS.textColor,
    borderWidth: 1,
    backgroundColor: COLORS.orange,
  },

  input2: {
    borderColor: 'red',
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 20,
    color: COLORS.textColor1,
  },

  containerVibr: {
    marginHorizontal: 20,
    marginTop: 15,
  },

  minus: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: COLORS.textColor1,
    alignItems: 'center',
    paddingTop: 10
  },

  topBottom: {
    paddingHorizontal: 5,
    borderColor: COLORS.gray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },

  counter: {
    flexDirection: 'row',
  },

  containertext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.orange,
    marginVertical: 10,
    marginLeft: 20,
    flex: 1,
  },

  categoryText: {
    color: COLORS.grey,
    fontSize: 15,
  },

  switchBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  discountInput: {
    borderColor: 'red',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    flex: 1,
    marginLeft: 60,
  },

  quantityBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  quantityText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 10,
  },

  quantityInput: {
    borderColor: 'red',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    flex: 1,
  },

  rowsInput: {
    flexDirection: 'row',
    marginVertical: 5,
    borderColor: 'red',
    borderRadius: 7,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: COLORS.textColor,
    borderWidth: 1,
    backgroundColor: COLORS.orange,
    justifyContent: 'space-between',
  },

  showedView: {
    paddingVertical: 10,
    backgroundColor: 'gray',
    position: 'absolute',
    right: 10,
    top: 20,
    left: 0,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
  },

  showedText: {
    color: COLORS.white,
  },

  dimensions: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  dimensionsInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dimensionsInput: {
    borderColor: 'red',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 10,
    paddingBottom: 50,
  },

  imagePicker: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  nameInputView: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  nameInputText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },

  addBtnView: {
    flexDirection: 'row',
  },

  addBtn: {
    borderColor: COLORS.red,
    // marginHorizontal: 120,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 50,
    marginRight: 214,
  },

  saveBtnBox: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 100
  },

  saveBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },

  saveText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },

  text: {
    color: COLORS.grey,
    fontSize: 18,
    marginHorizontal: 18,
    marginVertical: 5,
  },

  touchableOpacity: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginHorizontal: 20,
    alignSelf: 'stretch',
  },

  moneyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    // paddingHorizontal: 10,
    marginRight: 20,
  },

  moneyInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
    color: COLORS.textColor1,
  },

  moneySelectInput: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.grey,
    color: COLORS.textColor1,
    flex: 1,
  },

  descriptionInput: {
    flex: 1,
    width: '90%',
    minHeight: 100,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    // paddingBottom: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: COLORS.red,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: COLORS.textColor1,
  },

  addAr: {
    backgroundColor: COLORS.grey,
    marginHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
  },

  characterView: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  characterText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 120,
    marginTop: 15,
  },

  numberColor: {
    color: COLORS.textColor,
  },

  colorText: {
    color: COLORS.grey,
    fontSize: 16,
    marginTop: 20,
    marginHorizontal: 15,
  },

  selectedColor: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    color: COLORS.textColor1,
    borderColor: COLORS.red,
    flex: 1,
  },

  selectedColorText: {
    color: COLORS.grey,
  },

  addText: {
    color: COLORS.textColor,
  },

  imageInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: COLORS.red,
    flex: 1,
    color: COLORS.textColor
  },

  razmerText: {
    color: COLORS.grey,
    fontSize: 14,
    marginTop: 15,
    marginLeft: 15,
  },

  razmerBtn: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.red,
    color: COLORS.textColor1,
  },

  selectedText: {
    color: COLORS.grey,
    fontSize: 14,
  },

  gabariti: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  dropdown: {
    // borderRadius: 4
  },
  dropdownButtonText: { color: '#000', fontSize: 16, textAlign: "left", width: '100%' },
  dropdownRowStyle: {
    backgroundColor: COLORS.white,
    padding: 0,
    margin: 0,
    height: 40,
  },
  dropdownButtonStyle: {
    opacity: 0.7,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    height: 40,
    borderColor: COLORS.red,
    borderWidth: 1,
    borderRadius: 10,
    left: 20,
    width: width - 20 * 2,
  }
});
