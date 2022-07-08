import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
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
  XIcon,
} from '../../../../assets/icons/icon';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../../constants/color';
import { logoutAction } from '../../../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const InformationView = ({ closeModal }: any) => {
  let navigation = useNavigation();
  const dispatch = useDispatch()

  const onNavigate = (page: string) => {
    navigation.navigate(page);
    closeModal();
  };

  return (
    <SafeAreaView style={styles.contaioner}>
      <TouchableOpacity onPress={closeModal}>
        <View style={styles.contaionerBox}>
          <XIcon />
        </View>
      </TouchableOpacity>
      <View style={styles.contaionerBoxView}>
        <Text style={styles.contaionerBoxText}>Mironshoh Nasimov</Text>
      </View>
      <View style={styles.sectionBoxView}>
        <View style={styles.contaionerBoxView1}>
          <Text style={styles.sectionText}>Mои товары</Text>
        </View>
        <TouchableOpacity onPress={() => onNavigate('Orders')}>
          <View style={styles.sectionContainer}>
            <StarIcon />
            <Text style={styles.sectionContainerText}>Заказы</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('ProductCards')}>
          <View style={styles.sectionContainer}>
            <AnalyticsIcon />
            <Text style={styles.sectionContainerText}>Товары</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('Reviews')}>
          <View style={styles.sectionContainer}>
            <ReviewsIcon />
            <Text style={styles.sectionContainerText}>Отзывы</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('Analytics')}>
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
        <TouchableOpacity onPress={() => onNavigate('Brands')}>
          <View style={styles.sectionContainer}>
            <BrandsIcon />
            <Text style={styles.sectionContainerText}>Бренды</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('Support')}>
          <View style={styles.sectionContainer}>
            <SupportIcon />
            <Text style={styles.sectionContainerText}>Поддержка</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('MyProfile')}>
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
        <TouchableOpacity onPress={() => {
          dispatch(logoutAction())
        }}>
          <View style={styles.sectionContainer}>
            <ExitIcon />
            <Text style={styles.sectionContainerText}>Выход</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InformationView;
