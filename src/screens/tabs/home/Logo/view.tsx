import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground, Modal,
  SafeAreaView,
  ScrollView,
  Text, TouchableOpacity, View
} from 'react-native';
import { baseUrl } from '../../../../api';
import { MessageIcon } from '../../../../assets/icons/icon';
import { COLORS } from '../../../../constants/color';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getShopSeller, getShopSellerUser } from '../../../../redux/slices/shopSeller';
import store from '../../../../redux/store';
import InformationView from '../Information/view';
import useLogoHook from './useLogoHook';
import { styles } from './style';

const LogoView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch: any = useAppDispatch()
  const backroundImageUri = useAppSelector(s => s?.shopSeller?.data?.photo)
  const imgUri = useAppSelector(s => s?.shopSeller?.data?.user?.photo)
  const { shop, getRquestShop } = useLogoHook();


  useEffect(() => {
    dispatch(getShopSeller())
    dispatch(getShopSellerUser())
    getRquestShop()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={{ flex: 1 }}>
          <InformationView closeModal={() => setIsModalVisible(false)} />
        </View>
      </Modal>
      <View style={styles.containerView}>
        <Text style={styles.containerText}></Text>
        <Text style={styles.containerText1}>{store.getState().auth.user?.data?.name}</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <MessageIcon width={30} height={30} fill={COLORS.white} />
        </TouchableOpacity>
      </View>



      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 20
          }}>
          <ImageBackground
            resizeMode='cover'
            style={{
              alignItems: "center",
              paddingVertical: 25
            }}
            source={{
              uri: baseUrl + shop.photoBanner,

            }}
          >
            {
              !!imgUri && (
                <Image
                  resizeMode='cover'
                  source={{
                    uri: baseUrl + imgUri
                  }}
                  style={{
                    width: 130,
                    height: 130,
                  }}
                />
              )
            }

          </ImageBackground>
        </View>
        <View style={styles.sectionBox}>
          <Text style={styles.sectionBoxText}>Сводка за сегодня</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.row}>Заказали</Text>
          <Text style={styles.row}>Выкупили</Text>
        </View>
        <View style={styles.sectionBoxs}>
          <View style={styles.sectionBoxView}>
            <Text style={styles.sectionBoxView1}>0 шт</Text>
          </View>
          <View style={styles.sectionBoxView2}>
            <Text style={styles.sectionBoxView12}>0 шт</Text>
          </View>
          <View style={styles.sectionBoxView}>
            <Text style={styles.sectionBoxView1}>0 шт</Text>
          </View>
          <View style={styles.sectionBoxView2}>
            <Text style={styles.sectionBoxView12}>0 шт</Text>
          </View>
        </View>
        <View style={styles.sectionBox12}>
          <Text style={styles.sectionBoxText}>
            Статистика Динамика {'\n'}продаж
          </Text>
        </View>
        <View>
          <View style={styles.invertorBox}>
            <View style={styles.invertor}>
              <Text style={styles.invertorText}>Поставки</Text>
              <Text style={styles.invertorText}>0</Text>
            </View>
            <View style={styles.invertor}>
              <Text style={styles.invertorText}>Ошибка в товари</Text>
              <Text style={styles.invertorText1}>Ошибка нет</Text>
            </View>
          </View>
          <View style={styles.invertorBox1}>
            <View style={styles.invertor}>
              <Text style={styles.invertorText}>Отзыви в товари</Text>
              <Text style={styles.invertorText}>0</Text>
            </View>
            <View style={styles.invertor}>
              <Text style={styles.invertorText}>Заказали</Text>
              <Text style={styles.invertorText1}>3585</Text>
            </View>
          </View>
        </View>
        <View style={styles.invertorlow}>
          <Text style={styles.invertorText}>Отзыви в товари</Text>
          <Text style={styles.invertorText}>0</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.invertorlowe}>
            <Text style={styles.invertorText12}>Дефицит</Text>
            <Text style={styles.invertorText123}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </Text>
          </View>
          <View style={styles.invertorlowe}>
            <Text style={styles.invertorText12}>Лист ожидания</Text>
            <Text style={styles.invertorText123}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.invertorBox01}>
            <View style={styles.invertordefult}>
              <Text style={styles.invertorText}>Заказали</Text>
              <Text style={styles.invertorText}>0</Text>
            </View>
            <View style={styles.invertordefult}>
              <Text style={styles.invertorText}>Oтправляли</Text>
              <Text style={styles.invertorText1}>3585</Text>
            </View>
          </View>
          <View style={styles.invertorlowView}>
            <Text style={styles.invertorText}>Получили</Text>
            <Text style={styles.invertorText}>0</Text>
          </View>
        </View>
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogoView;
