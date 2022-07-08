import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ByBuyers from '../../../../components/ByBuyers';
import ByProducts from '../../../../components/ByProducts';
import FilterOrders from '../../../../components/FilterOrders';
import Header from '../../../../components/Header';
import { styles } from './styles';

const OrdersView = () => {
  const [isActive, setIsActive] = useState(0);
  let navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [state, setState] = useState({
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  });

  let {
    xTabOne,
    translateX,
    active,
    translateXTabTwo,
    translateXTabOne,
    translateY,
  } = state;

  let handleSlide = (type: number) => {
    let { active, translateX, translateXTabTwo, translateXTabOne } = state;
    Animated.spring(translateX, {
      toValue: type,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: width,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  useEffect(() => {
    handleSlide(xTabOne);
  }, [state.active]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Заказы" />
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [
              {
                translateX,
              },
            ],
          }}
        />
        <View style={styles.styleOne}>
          <TouchableOpacity
            style={active === 0 ? styles.buttonBox : styles.buttonBoxTwo}
            onLayout={event =>
              setState({ ...state, xTabOne: event.nativeEvent.layout.x })
            }
            onPress={() => setState({ ...state, active: 0 })}>
            <Text
              style={{
                color: active === 0 ? 'white' : 'black',
                fontWeight: '500',
              }}>
              По товарам
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={active === 1 ? styles.buttonBox : styles.buttonBoxTwo}
            onLayout={event =>
              setState({ ...state, xTabTwo: event.nativeEvent.layout.x })
            }
            onPress={() => setState({ ...state, active: 1 })}>
            <Text
              style={{
                color: active === 0 ? 'black' : 'white',
                fontWeight: '500',
              }}>
              По покупательям
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }}
              onLayout={event =>
                setState({
                  ...state,
                  translateY: event.nativeEvent.layout.height,
                })
              }>
              <FilterOrders />
              <ByProducts />
            </Animated.View>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}>
              <ByBuyers />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrdersView;
