import { StyleSheet, Text, ActivityIndicator, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/color';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearOrdersList, getAllOrders } from '../redux/slices/orders';
import { statusType } from '../redux/types/statusType';

const ByProducts = () => {
  const ordersState = useAppSelector(state => state.orders)
  const dispatch: any = useAppDispatch()

  React.useEffect(() => {
    dispatch(getAllOrders())

    return () => {
      dispatch(clearOrdersList())
    }
  }, [])

  const total = ordersState?.orders_list?.map(item => item?.orderProducts.reduce((sum, i) => sum + i.price, 0)).reduce((a, b) => a + b, 0)

  function toFix(num: string) {
    let price = ''
    let count = 0
    for (let i = num.length - 1; i >= 0; i--) {
      count++
      if (count === 3) {
        price += num[i] + " ";
        count = 0
      } else {
        price += num[i]
      }
    }
    return price.split("").reverse().join("")
  }

  const statusPayment = (num: number) => {
    switch (num) {
      case 0:
        return 'Не оплачен'
      case 1:
        return 'Оплачен'
      default:
        return;
    }
  }

  const statusLogist = (num: number) => {
    switch (num) {
      case 0: return 'В ожидании'
      case 1: return 'Принят'
      case 2: return 'Отменен'
      case 3: return 'Отправлен на доставку'
      case 4: return 'В пути'
      case 5: return 'Доставлен'
      default: return;
    }

  }


  if (ordersState.orders.status === statusType.pending) return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      marginTop: 100,
      flexDirection: 'row'
    }}>
      <Text style={styles.text}>данные загружаются </Text>
      <View>
        <ActivityIndicator />
      </View>
    </View>
  )

  const Item = (item: any) => (
    <View style={styles.clothesView}>
      <Text style={styles.kidsClothes}>{item?.product?.name}</Text>
      <View style={styles.clothesBox}>
        <View>
          <Text style={styles.texts}>Количество: 25шт</Text>
          <Text style={styles.texts}>Статус доставки: {statusPayment(item?.status_payment)}</Text>
          <Text style={styles.texts}>Статусный логист:{statusLogist(item?.status_logist)}</Text>
          <Text style={styles.texts}>Статус оплаты: {item?.payment?.name}</Text>
          <Text style={styles.texts}>Id заказа: {item?.id}</Text>
        </View>
        <View>
          <Text style={styles.price}>{toFix(String(item?.price ?? 0))} сум</Text>
          <Text style={styles.phoneNumber}>{item?.phone}</Text>
        </View>
      </View>
    </View>
  )

  const BigItem = (item: any) => (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'orange',
        marginVertical: 20,
        borderRadius: 4
      }}
    >
      <Text style={styles.text}>Покупатель: {item?.name}</Text>
      <ScrollView >

        {
          item?.orderProducts.map((i: any) => (
            <Item
              key={i.id}
              {...i}
              status_payment={item?.status_payment}
              status_logist={item?.status_logist}
              payment={item?.payment}
            />
          ))
        }
      </ScrollView>
    </View>
  )

  return (
    <View style={styles.ordersBox}>
      <FlatList
        data={ordersState?.orders_list ?? []}
        renderItem={({ item: i }) => <BigItem key={i.id} {...i} />}
        ListEmptyComponent={<Text style={styles.text}>заказ не найден</Text>}
        ListHeaderComponent={<View />}
        ListFooterComponent={<View />}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {
          !!ordersState?.orders_list.length ? (
            <>
              <Text style={styles.allPrice}>Общая сумма: </Text>
              <Text style={styles.allPriceMoney}>{toFix(String(total ?? 0))} сум</Text>
            </>
          ) : null
        }

      </View>
    </View>
  );
};

export default ByProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },

  containerBoxText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textColor1,
  },

  sectionView: {
    marginTop: 30,
  },

  justfiyRow: {
    width: 78,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.grey1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginLeft: 30,
  },

  margin: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.grey,
  },

  ordersBox: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 200,
  },

  order: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.textColor1,
  },

  rowsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.orange,
    marginLeft: 5,
    marginTop: 10,
  },

  productInActiveBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
    marginLeft: 5,
    marginTop: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },

  productInActiveName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: COLORS.textColor1,
  },

  clothesView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    paddingBottom: 5,
  },

  clothesBox: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  kidsClothes: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 5,
    color: COLORS.textColor1,
  },

  quantityText: {
    fontSize: 14,
    fontWeight: '500',
  },

  texts: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textColor1,
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.lightOrange,
    marginTop: 20,
    // marginLeft: 70,
  },

  phoneNumber: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 40,
    color: COLORS.textColor1,
  },

  allPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textColor1,
    marginLeft: 10,
    marginTop: 10,
  },

  allPriceMoney: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.lightOrange,
    marginTop: 10,
  },
});
