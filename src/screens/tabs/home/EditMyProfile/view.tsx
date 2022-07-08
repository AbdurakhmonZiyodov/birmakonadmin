import React, { useState } from 'react';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../../../../components/Header';
import Instructions from '../../../../components/Instructions';
import MyData from '../../../../components/MyData';
import Loading from '../../../../loading/Loading';
import { useAppSelector } from '../../../../redux/hooks';
import { clearShopSeller, getShopSeller, getShopSellerUser } from '../../../../redux/slices/shopSeller';
import { statusType } from '../../../../redux/types/statusType';
import { styles } from './style';

const EditMyProfile = () => {
  const [state, setState] = useState({ active: 0 })
  const shopSellerState: any = useAppSelector(({ shopSeller }) => shopSeller)
  const dispatch: any = useDispatch()


  React.useEffect(() => {
    dispatch(getShopSeller())
    dispatch(getShopSellerUser())

    return () => {
      dispatch(clearShopSeller())
    }
  }, [])

  if (shopSellerState.shop.status === statusType.pending) return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Loading title={"Загрузка сведений о магазине"} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="Настройка" />
      <View style={styles.container}>

        <View style={styles.styleOne}>
          <TouchableOpacity
            style={state.active === 0 ? styles.buttonBox : styles.buttonBoxTwo}
            onPress={() => setState({ ...state, active: 0 })}>
            <Text
              style={{
                color: state.active === 0 ? 'black' : 'black',
                fontWeight: '500',
              }}>
              Мои Реквизиты
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={state.active === 1 ? styles.buttonBox : styles.buttonBoxTwo}
            onPress={() => setState({ ...state, active: 1 })}>
            <Text
              style={{
                color: state.active === 0 ? 'black' : 'black',
                fontWeight: '500',
              }}>
              Мои Данный
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            {
              state.active === 0 ? < Instructions /> : <MyData />
            }
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default EditMyProfile;
