import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../../../components/Header';
import { styles } from './style';

const ByBuyers = () => {
  const [isActive, setIsActive] = useState(0);
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Заказы" />
      <View style={styles.ordersBox}>
        <Text style={styles.order}>Заказы</Text>
        <View style={styles.rowsBtn}>
          <TouchableOpacity
            style={
              isActive === 1 ? styles.productBtn : styles.productInActiveBtn
            }
            onPress={() => {
              setIsActive(1);
              navigation.navigate('OrdersView');
            }}>
            <Text
              style={
                isActive === 1 ? styles.productInActiveName : styles.productName
              }>
              По товарам
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              isActive === 2 ? styles.productBtn : styles.productInActiveBtn
            }
            onPress={() => setIsActive(2)}>
            <Text
              style={
                isActive === 2 ? styles.productInActiveName : styles.productName
              }>
              По покупательям
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ByBuyers;
