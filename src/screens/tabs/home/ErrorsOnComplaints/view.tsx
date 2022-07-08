import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BackIcon,
  CherIcon,
  GroupIcon,
  SearchIcon,
} from '../../../../assets/icons/icon';
import Header from '../../../../components/Header';
import {COLORS} from '../../../../constants/color';

import {styles} from './style';

const ErrorsOnComplaints = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ошибки по жалобам" />
      <View style={{marginTop: 30, marginHorizontal: 16}}>
        <View>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Поиск по товаром"
            style={styles.textInput}
          />
          <View style={styles.iconBox}>
            <SearchIcon />
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View
            style={{
              backgroundColor: COLORS.orange,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: COLORS.white,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 14,
                  fontWeight: '500',
                }}>
                Наименование
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Код
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Артикул
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Бренд
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: COLORS.textColor}}>Макс количество строк</Text>
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.grey1,
                padding: 7,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: COLORS.grey,
                  marginRight: 6,
                }}>
                15 на странице
              </Text>
              <View
                style={{
                  transform: [
                    {
                      rotate: '90deg',
                    },
                  ],
                }}>
                <CherIcon />
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  transform: [
                    {
                      rotate: '180deg',
                    },
                  ],
                }}>
                <CherIcon />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  borderColor: COLORS.grey,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: COLORS.grey,
                  }}>
                  1
                </Text>
              </View>
              <CherIcon />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: COLORS.textColor1,
                }}>
                Перейти
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 5,
                  marginLeft: 4,
                  borderColor: COLORS.grey,
                }}>
                <Text
                  style={{fontSize: 11, fontWeight: '500', color: COLORS.grey}}>
                  1
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ErrorsOnComplaints;
