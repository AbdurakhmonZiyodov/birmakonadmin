import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {
  AnalyticsIcon,
  BrandsIcon,
  ExitIcon,
  InstructionsIcon,
  MessagesIcon,
  NotificationIcon,
  RatingIcon,
  ReviewsIcon,
  StarIcon,
  SupportIcon,
  UserInterfaceIcon,
} from '../../../../assets/icons/icon';
import { COLORS } from '../../../../constants/color';
import { styles } from './style';
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../../../redux/slices/auth';

const AccountView = ({ closeModal }: any) => {
  let navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.contaioner}>
      <View style={styles.contaionerBoxView}>
        <Text style={styles.contaionerBoxText}>Mironshoh Nasimov</Text>
      </View>
      <Text style={styles.editProfile}>Профиль</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditMyProfile')}>
        <View style={styles.sectionContainer}>
          <UserInterfaceIcon fill={COLORS.white} />
          <Text style={styles.sectionContainerText}>Мой профиль</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.sectionBoxView}>
        <View style={styles.contaionerBoxView1}>
          <Text style={styles.sectionText}>Mои товары</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
          <View style={styles.sectionContainer}>
            <StarIcon />
            <Text style={styles.sectionContainerText}>Заказы</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductCards')}>
          <View style={styles.sectionContainer}>
            <AnalyticsIcon />
            <Text style={styles.sectionContainerText}>Товары</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
          <View style={styles.sectionContainer}>
            <ReviewsIcon />
            <Text style={styles.sectionContainerText}>Отзывы</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
          <View style={styles.sectionContainer}>
            <RatingIcon />
            <Text style={styles.sectionContainerText}>Аналитика</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sectionContainer}>
            <NotificationIcon />
            <Text style={styles.sectionContainerText}>Уведомления</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBoxView}>
        <View style={styles.contaionerBoxView1}>
          <Text style={styles.sectionText}>Информация</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
          <View style={styles.sectionContainer}>
            <BrandsIcon />
            <Text style={styles.sectionContainerText}>Бренды</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Support')}>
          <View style={styles.sectionContainer}>
            <SupportIcon />
            <Text style={styles.sectionContainerText}>Поддержка</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <View style={styles.sectionContainer}>
            <InstructionsIcon />
            <Text style={styles.sectionContainerText}>Инструкции</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sectionContainer}>
            <MessagesIcon />
            <Text style={styles.sectionContainerText}>Сообщения</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(logoutAction())
          }}
        >
          <View style={styles.sectionContainer}>
            <ExitIcon />
            <Text style={styles.sectionContainerText}>Выход</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountView;
