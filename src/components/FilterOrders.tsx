import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  ChevronDownIcon,
  OrderIcon,
  PaymentExpectedIcon,
  PenIcon,
  RightgreyIcon,
  RightIcon,
  SendingIcon,
  SmsIcon,
} from '../assets/icons/icon';
import { COLORS } from '../constants/color';
import useMyOrders from './../hooks/useMyOrders';

const FilterOrders = () => {
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
          <View style={styles.containerBox}>
            <TouchableOpacity>
              <View style={styles.view}>
                <PaymentExpectedIcon />
                <View style={styles.iconView}>
                  <Text style={styles.iconText}>{state.pending?.data?.length ?? 0}</Text>
                </View>
                <Text style={styles.text}>Ожидается оплата</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.view}>
                <SendingIcon />
                <View style={styles.iconView}>
                  <Text style={styles.iconText}>{state.accepted?.data?.length ?? 0}</Text>
                </View>
                <Text style={styles.text}>Ожидается отправка</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.view}>
                <View style={styles.iconView}>
                  <Text style={styles.iconText}>{state.delivery?.data?.length ?? 0}</Text>
                </View>
                <OrderIcon />
                <Text style={styles.text}>Заказ отправлен</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.view}>
                <SmsIcon />
                <View style={styles.iconView}>
                  <Text style={styles.iconText}>{state.confirmationPending?.data?.length ?? 0}</Text>
                </View>
                <Text style={styles.text}>Ожидается отзыв</Text>
              </View>
            </TouchableOpacity>
          </View>
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
      ) : null}
    </TouchableOpacity>
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
