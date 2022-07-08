import { useNavigation } from '@react-navigation/native';
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { BackIcon, MessageIcon } from '../assets/icons/icon';
import { COLORS } from '../constants/color';
import { clearRequest } from '../redux/slices/product';
import InformationView from '../screens/tabs/home/Information/view';

const Header = ({ title = 'Мой профиль' }) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch: any = useDispatch()

  return (
    <View style={styles.header}>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={{ flex: 1 }}>
          <InformationView closeModal={() => setIsModalVisible(false)} />
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
      >
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.containerText}>{title}</Text>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <MessageIcon width={30} height={30} fill={COLORS.textColor1} />
      </TouchableOpacity>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textColor1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
    marginVertical: Platform.OS === 'ios' ? 0 : 20,
  },
  inpittt: {
    fontSize: 9,
  },
});
