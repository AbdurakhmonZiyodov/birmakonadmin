import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import Header from '../../../../components/Header';
import Chat from '../../../../components/Chat';
import HomeStack from '@birmakon/routes/HomeStack';
import { useNavigation } from '@react-navigation/native';

const Suppliers = () => {
  const [activeIndex, setIsActive] = useState(0);
  let navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Поставщики" />
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
          onPress={() => {
            navigation.navigate("Supportt")
            setIsActive(1)
          }}>
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
          onPress={() => setIsActive(2)}>
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
  )
}

export default Suppliers;
