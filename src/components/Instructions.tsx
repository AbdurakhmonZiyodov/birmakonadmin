import React, { useState } from 'react';
import { IconButton } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Foundation'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS } from '../constants/color';
import { useAppSelector } from '../redux/hooks';
import { changeShopSellerInput, shopEditOn, updateShopSeller } from '../redux/slices/shopSeller';

const Instructions = () => {
  const dispatch: any = useDispatch()
  const shopSellerState: any = useAppSelector(({ shopSeller }) => shopSeller)

  const isEdit = shopSellerState.isShopEdit

  return (
    <>
      <View>
        <View style={styles.inputsView}>
          <Text style={styles.infoSellsText}>Данный продавца</Text>
          <View style={styles.boxView}>
            <View style={styles.exclamatoryView}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 14,
                  marginRight: 10,
                }}>
                Заполниту данный поставшика
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
              }}>
              Карточки загружинний без фотографии не попадут на сайт
            </Text>
          </View>
          <View style={styles.infoInput}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.innText}>ИНН ? </Text>
                <View style={{ paddingTop: 6 }}>
                  <IconButton
                    onPress={() => dispatch(shopEditOn())}
                    icon={props => <Icon name="page-edit" {...props} color="#000" size={30} />}
                    color="#000"
                  />
                </View>
              </View>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.inn}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "inn", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Наименование</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.name}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "name", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Юридический адрес ?</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.address_legal}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "address_legal", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Оконх</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.okohx}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "okohx", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Расчётный счёт ?</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.account}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "account", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Банк</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.bank}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "bank", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Окед</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.oked}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "oked", value }))}
                editable={isEdit}
              />
            </View>
            <View>
              <Text style={styles.innText}>Мфо</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? styles.isEdit : {}]}
                value={shopSellerState.data?.shopSeller?.mfo}
                onChangeText={value => dispatch(changeShopSellerInput({ key: "mfo", value }))}
                editable={isEdit}
              />
            </View>
          </View>
        </View>
        <View style={styles.saveBtnView}>
          {
            isEdit && (
              <TouchableOpacity onPress={() => dispatch(updateShopSeller())} style={styles.saveBtn} activeOpacity={0.8}>
                {
                  shopSellerState.isShopUpdate ? <ActivityIndicator /> : <Text style={styles.saveText}>Сохранить</Text>
                }

              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  inputsView: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },

  infoSellsText: {
    fontSize: 14,
    fontWeight: '500',
  },

  boxView: {
    marginHorizontal: 15,
    paddingHorizontal: 25,
    backgroundColor: COLORS.buttonColor,
    borderRadius: 5,
    marginTop: 10,
    paddingBottom: 5,
  },

  exclamatoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },

  infoInput: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 14,
    marginTop: 10,
  },

  innText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },

  innInput: {
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginTop: 2,
    color: "#000"
  },
  isEdit: {
    borderColor: 'transparent'
  },

  saveBtnView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  saveBtn: {
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    alignItems: 'center',
  },

  saveText: {
    color: COLORS.white,
  },
});
