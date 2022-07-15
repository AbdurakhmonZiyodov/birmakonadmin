import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MessagesIcon } from '../assets/icons/icon';
import { IMAGES } from '../assets/images/images';
import { COLORS } from '../constants/color';
import { useAppSelector } from '../redux/hooks';
import { getAllOrders } from '../redux/slices/orders';

const ByBuyers = () => {

  const dispatch: any = useDispatch()
  const ordersState: any = useAppSelector(state => state.orders)


  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  const dataObj = (ordersState?.orders_list ?? []).reduce((p, c) => {
    if (p[c.name]) {
      return { ...p, [c.name]: { ...p[c.name], [c.id]: c } }
    } else {
      return { ...p, [c.name]: { [c.id]: c } }
    }
  }, {})

  const dataSort = []

  for (let key in dataObj) {
    dataSort.push(Object.values(dataObj[key]))
  }



  const Item = (props: any) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <View style={styles.userInfosBox}>
          <View style={{ marginLeft: 12, marginTop: 12 }}>
            <Image source={IMAGES.userImage} style={styles.image} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.userNameText, { color: "#333" }]}>{props.name}</Text>
            <Text style={styles.grayText}>{props?.count} закозов</Text>
            <View style={styles.rowsView}>
              <View style={styles.messageView}>
                <MessagesIcon fill={COLORS.orange} />
                <Text style={styles.writeText}>Написать</Text>
              </View>
              <Text style={styles.toMarket}>Перейти в магазин</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      {
        dataSort.map((item, index) => {
          let count = item.map(i => i.orderProducts.length).reduce((a, b) => a + b, 0)
          return (
            <Item
              key={index}
              name={item[0].name}
              count={count}
            />
          )
        })
      }
    </>
  );
};

export default ByBuyers;

const styles = StyleSheet.create({
  userInfosBox: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    // alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: 10,
  },

  image: {
    resizeMode: 'contain',
    borderRadius: 40,
    width: 80,
    height: 80,
  },

  userNameText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
  },

  grayText: {
    color: COLORS.grey,
    fontWeight: '500',
  },

  rowsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  messageView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 70,
  },

  writeText: {
    color: COLORS.orange,
    fontSize: 14,
    fontWeight: '500',
  },

  toMarket: {
    color: COLORS.textColor,
    fontWeight: '500',
    fontSize: 16,
  },
});
