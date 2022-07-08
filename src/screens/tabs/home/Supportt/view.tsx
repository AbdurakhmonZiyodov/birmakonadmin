import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Chat from '../../../../components/Chat';
import Header from '../../../../components/Header';
import { COLORS } from '../../../../constants/color';
import { styles } from './style';

const SupporttView = () => {
  const [activeIndex, setIsActive] = useState(0);
  let navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Поддержка" />
      <View
        style={{
          // paddingVertical: 27,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={
            activeIndex === 1 ? styles.supportActive : styles.supportIsActive
          }
          onPress={() => setIsActive(1)}>
          <Text
            style={
              activeIndex === 1
                ? styles.supportTextActive
                : styles.supportTextIsActive
            }>
            Поддержка
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeIndex === 2 ? styles.supportActive : styles.supportIsActive
          }
          onPress={() => {
            navigation.navigate('Suppliers')
            setIsActive(2)
          }}>
          <Text
            style={
              activeIndex === 2
                ? styles.supportTextActive
                : styles.supportTextIsActive
            }>
            Поставщики
          </Text>
        </TouchableOpacity>
      </View>
      <Chat />
    </SafeAreaView>
  );
};

export default SupporttView;
