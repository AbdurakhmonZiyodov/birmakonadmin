import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView, View
} from 'react-native';
import ByProducts from '../../../../components/ByProducts';
import FilterOrders from '../../../../components/FilterOrders';
import Header from '../../../../components/Header';
import { styles } from './styles';

const OrdersView = () => {
  const [filter, setFilter] = useState({
    status: "",
  });
  const [activeButton, setActiveButton] = useState("button");
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Заказы" />
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <FilterOrders
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              onClickFilter={(status) => {
                let newFilter = {
                  ...filter,
                  status,
                };
                setFilter(newFilter);
                // dispatch(orders(newFilter));
              }}
            />
            <ByProducts />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrdersView;
