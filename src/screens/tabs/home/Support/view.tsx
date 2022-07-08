import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BackIcon, GroupIcon} from '../../../../assets/icons/icon';
import Chat from '../../../../components/Chat';
import Header from '../../../../components/Header';
import {COLORS} from '../../../../constants/color';
import {styles} from './style';

const SupportView = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Поддержка" />
      <Chat onPress={() => navigation.navigate('SupporttView')} />
    </SafeAreaView>
  );
};

export default SupportView;
