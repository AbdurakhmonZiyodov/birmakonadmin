import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import { BackIcon, GroupIcon, SearchIcon } from '../../../../assets/icons/icon';
import { COLORS } from '../../../../constants/color';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header';
import useProductcards2 from '../../../../hooks/useProductcards2';
import { baseUrl } from '../../../../api';

const BrandsView = () => {
  const navigation = useNavigation();
  const { state: { brand }, requests } = useProductcards2()
  console.log('====================================');
  console.log(JSON.stringify(brand, null, 4));
  console.log('====================================');
  useEffect(() => {
    requests.brand.brands_get()
  }, [])


  const renderItem = e => {
    console.log('e: ', JSON.stringify(e, null, 4));

    return (
      <View
        style={{
          flex: 0.8,
          marginTop: 16,
          marginLeft: e.index % 2 ? 8 : 0,
        }}>
        <Image resizeMode="contain" source={{ uri: baseUrl + e.item.photo }} style={{
          width: 180,
          height: 180
        }} />
        {/* <Text>sss</Text> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Бренды" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerSection}>
          <Text style={styles.containerSectionText}>Бренды</Text>
        </View>
        <View style={styles.innerRow}>
          <Text style={styles.containerInnerText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing {'\n'}elit, sed
            do eiusmod tempor , Lorem ipsum {'\n'}dolor sit amet, consectetur
            adipiscing elit, sed do{'\n'}eiusmod tempor
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Поиск по товаром"
            placeholderTextColor={COLORS.gray}
            style={styles.textInput}
          />
          <View style={styles.iconBox}>
            <SearchIcon />
          </View>
        </View>
        <View style={styles.productsCont}>
          <FlatList
            numColumns={2}
            data={brand?.brand_list}
            renderItem={e => renderItem(e)}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ErrorsOnComplaints')}>
          <View
            style={{
              backgroundColor: COLORS.buttonColor,
              marginTop: 100,
              marginHorizontal: 16,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 8,
              borderRadius: 5,
            }}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: '400' }}>
              Сохранить
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandsView;
