import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowDownIcon,
  BackIcon,
  GroupIcon,
  SearchIcon,
  StopIcon,
} from '../../../../assets/icons/icon';
import Header from '../../../../components/Header';
import Rating from '../../../../components/Rating';
import {COLORS} from '../../../../constants/color';

import {styles} from './style';

export const ReviewsView = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Отзывы " />
      <View
        style={{
          flex: 1,
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: COLORS.textColor1,
            }}>
            Отзывы
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 12,
              fontWeight: '500',
              color: COLORS.grey2,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </Text>
          <View style={{marginTop: 16}}>
            <TextInput
              placeholder="Поиск по товаром"
              style={styles.textInput}
            />
            <View style={styles.iconBox}>
              <SearchIcon />
            </View>
          </View>
          <View
            style={{
              marginTop: 21,
              backgroundColor: COLORS.grey,
              paddingVertical: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: COLORS.textColor1,
              }}>
              Выгрузить в Exel
            </Text>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.grey}}>
              Сортировать по:
            </Text>
            <View
              style={{
                marginLeft: 8,
                borderBottomWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: COLORS.textColor,
              }}>
              <Text
                style={{fontSize: 14, fontWeight: '500', color: COLORS.grey}}>
                Дате
              </Text>
              <ArrowDownIcon />
            </View>
            <View style={{marginLeft: 20}}>
              <Text
                style={{fontSize: 14, fontWeight: '500', color: COLORS.grey}}>
                Оценке
              </Text>
            </View>
          </View>
          <View style={{marginTop: 21}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                Турсунов Асрор
              </Text>
              <View
                style={{
                  marginLeft: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Rating sum={5} value={4} />
                <StopIcon style={{marginLeft: 12}} />
              </View>
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: '400',
                color: COLORS.grey3,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 12, fontWeight: '400', color: COLORS.grey3}}>
                30.04.2021
              </Text>
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  fontWeight: '400',
                  color: COLORS.grey3,
                }}>
                ID: 0001
              </Text>
            </View>
          </View>
          <View style={{marginTop: 21}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                Турсунов Асрор
              </Text>
              <View
                style={{
                  marginLeft: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Rating sum={5} value={4} />
                <StopIcon style={{marginLeft: 12}} />
              </View>
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: '400',
                color: COLORS.grey3,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 12, fontWeight: '400', color: COLORS.grey3}}>
                30.04.2021
              </Text>
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  fontWeight: '400',
                  color: COLORS.grey3,
                }}>
                ID: 0001
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 13,
              fontWeight: '400',
              color: COLORS.orange,
              textDecorationLine: 'underline',
              textAlign: 'right',
            }}>
            Посмотреть все отзывы
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
