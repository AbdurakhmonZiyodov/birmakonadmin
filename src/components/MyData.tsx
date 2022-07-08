import React from 'react';
import { IconButton } from '@react-native-material/core';
import IconV from 'react-native-vector-icons/Foundation'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { COLORS } from '../constants/color';

import { Icon } from '@rneui/themed';
import { useAppSelector } from '../redux/hooks';
import { changeShopSellerUserInput, shopSellerUserImageUpdate, shopUserEditOn, updateShopSellerUser } from '../redux/slices/shopSeller';
import { useDispatch } from 'react-redux';

const MyData = () => {
  const dispatch: any = useDispatch()
  const shopSellerState = useAppSelector(state => state.shopSeller)
  const isEdit = shopSellerState.isShopUserEdit

  console.log(isEdit);


  return (
    <>
      <View>
        <View style={styles.inputsView}>
          <View style={{
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: "center"
          }}>
            {
              shopSellerState.userData?.photo.uri ? (
                <Image
                  source={{
                    uri: shopSellerState.userData?.photo.uri
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50
                  }}
                />
              ) : null
            }

            {
              isEdit && (
                <TouchableOpacity
                  style={{
                    marginLeft: 10
                  }}
                  onPress={() => dispatch(shopSellerUserImageUpdate())}
                >
                  <Text>
                    <Icon

                      name='edit'
                      type="entypo"
                      size={20}
                    /></Text>
                </TouchableOpacity>
              )
            }
          </View>
          <Text style={styles.infoSellsText}>{shopSellerState.userData?.name}</Text>
          <Text style={styles.editsText}>доступ к редактирование</Text>
          <View style={styles.infoInput}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.innText}>Наименование организации</Text>
                <View style={{ paddingTop: 6 }}>
                  <IconButton
                    onPress={() => dispatch(shopUserEditOn())}
                    icon={props => <IconV name="page-edit" {...props} color="#000" size={30} />}
                    color="#000"
                  />
                </View>
              </View>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                placeholder="Mironshoh Nasimov"
                placeholderTextColor={"#000"}
                value={shopSellerState.userData?.name}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "name", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Телефон</Text>
              <TextInputMask
                type="custom"
                options={{
                  mask: '+998 99 999 99 99',
                }}
                keyboardType="phone-pad"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                placeholder="+998 99 999 99 99"
                value={shopSellerState.userData?.phone}
                placeholderTextColor={"#000"}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "phone", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Email</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                placeholder="youremail@gmail.com"
                value={shopSellerState.userData?.email}
                placeholderTextColor={"#000"}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "email", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Адрес</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                placeholderTextColor={"#000"}
                placeholder="address"
              />
            </View>
            <View>
              <Text style={styles.innText}>Контактное лицо</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                placeholder="Mironshoh Nasimov"
                value={shopSellerState.userData?.name}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "name", value }))}
              />
            </View>
            <Text style={styles.dataOfSignIn}>Данные для входа</Text>
            <View>
              <Text style={styles.innText}>Логин</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                value={shopSellerState.userData?.login}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "login", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Старый пароль</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                value={shopSellerState.userData?.old_password}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "old_password", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Новый пароль</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                value={shopSellerState.userData?.password}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "password", value }))}
              />
            </View>
            <View>
              <Text style={styles.innText}>Повторите новые пароль</Text>
              <TextInput
                keyboardType="default"
                style={[styles.innInput, !isEdit ? { borderColor: '#fff', borderWidth: 0 } : {}]}
                value={shopSellerState.userData?.repeat_password}
                onChangeText={(value) => dispatch(changeShopSellerUserInput({ key: "repeat_password", value }))}
              />
            </View>
          </View>
        </View>
        <View style={styles.saveBtnView}>
          {
            isEdit && (
              <TouchableOpacity
                style={styles.saveBtn}
                activeOpacity={0.8}
                onPress={() => dispatch(updateShopSellerUser())}
              >
                {
                  shopSellerState.isShopUserUdate ? (
                    <ActivityIndicator />
                  ) :
                    <Text style={styles.saveText}>Сохранить</Text>
                }
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </>
  );
};

export default MyData

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
    fontSize: 16,
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
    marginTop: 10,
  },

  innInput: {
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    marginTop: 5,
    color: "#000"
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

  editsText: {
    color: COLORS.grey,
    marginTop: 10,
  },

  dataOfSignIn: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    marginTop: 20,
  },
});
