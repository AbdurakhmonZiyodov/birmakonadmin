import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  ChevronDownIcon,
  OrderIcon, PenIcon,
  RightgreyIcon,
  RightIcon,
  SendingIcon
} from '../assets/icons/icon';
import { COLORS } from '../constants/color';
import useMyOrders from './../hooks/useMyOrders';

interface FilterOrdersProps {
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  onClickFilter: (status: any) => void;
}

const FilterOrders: React.FC<FilterOrdersProps> = ({ activeButton, onClickFilter, setActiveButton }) => {
  const [isShowed, setIsShowed] = useState(false);
  const { onGetAllStatus, state } = useMyOrders()


  useEffect(() => {
    onGetAllStatus()
  }, [])

  const enableShow = () => {
    setIsShowed(true);
  };
  const disableShow = () => {
    setIsShowed(false);
  };

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={!isShowed ? enableShow : disableShow}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.myOrderText}>Мои заказы</Text>
        <ChevronDownIcon fill={COLORS.black} />
      </View>
      {isShowed ? (
        <View style={styles.ordersView}>
          <View style={styles.titleContainer}>
            <TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.textOrder}>Завершенные заказы</Text>
                <RightIcon fill={COLORS.gray} />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.containerBox}>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button");
                  onClickFilter(0);
                }}
              >
                <View style={styles.view}>
                  <SendingIcon />
                  <View style={styles.iconView}>
                    <Text style={styles.iconText}>{1}</Text>
                  </View>
                  <Text style={[styles.text, activeButton === "button" && styles.activeText]}>Новые заказы</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button1");
                  onClickFilter(1);
                }}
              >
                <View style={styles.view}>
                  <OrderIcon />
                  <Text style={[styles.text, activeButton === "button1" && styles.activeText]}>Принятые</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button2");
                  onClickFilter(3);
                }}
              >
                <View style={styles.view}>
                  <OrderIcon />
                  <Text style={[styles.text, activeButton === "button2" && styles.activeText]}>Ожидает доставки</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button3");
                  onClickFilter(5);
                }}
              >
                <View style={styles.view}>
                  <OrderIcon />
                  <Text style={[styles.text, activeButton === "button3" && styles.activeText]}>Доставленые</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button4");
                  onClickFilter(2);
                }}
              >
                <View style={styles.view}>
                  <OrderIcon />
                  <Text style={[styles.text, activeButton === "button4" && styles.activeText]}>Отмененые</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveButton("button5");
                  onClickFilter(9);
                }}
              >
                <View style={styles.view}>
                  <OrderIcon />
                  <Text style={[styles.text, activeButton === "button5" && styles.activeText]}>Ожидается отзыва</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.center}>
                <PenIcon fill={COLORS.gray} />
                <Text style={styles.greyText}>Возвраты</Text>
              </View>
              <RightgreyIcon />
            </View>
          </TouchableOpacity>
        </View>
      ) : null
      }
    </TouchableOpacity >
  );
};

export default FilterOrders;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },

  myOrderText: {
    color: COLORS.textColor1,
    fontSize: 16,
    fontWeight: '500',
  },

  ordersView: {
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginTop: 10,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    paddingBottom: 10,
    marginHorizontal: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: '500',
    fontSize: 18,
  },
  textOrder: {
    color: COLORS.gray,
    fontWeight: '600',
    fontSize: 10,
    marginRight: 15,
  },
  containerBox: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: COLORS.lightGray,
    paddingTop: 20,
  },
  text: {
    width: 70,
    textAlign: 'center',
    fontSize: 10,
    height: 30,
    color: COLORS.black,
  },
  activeText: {
    color: COLORS.red
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  greyText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.gray,
    marginHorizontal: 5,
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  iconView: {
    borderRadius: 50,
    backgroundColor: COLORS.orange,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -8,
    right: 15,
  },
  iconText: {
    color: COLORS.white,
    fontSize: 10,
  },
});
