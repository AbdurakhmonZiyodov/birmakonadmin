import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackIcon, GroupIcon, StopIcon } from '../../../../assets/icons/icon';
import Header from '../../../../components/Header';
import { styles } from './style';

const SettingView = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Настройка" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerBoxView}>
          <Text style={styles.sectionText}>Данный продавца</Text>
        </View>
        <View style={styles.buttonView}>
          <StopIcon style={{ alignSelf: 'center' }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.buttonText}>Заполниту данный поставшика</Text>
            <Text style={styles.buttonText1}>
              Карточки загружинний без фотографии,не попадут на сайт
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>ИНН ?</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Расчётный счёт ?</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Наименование</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Банк</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Юридический адрес ?</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Окед</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Оконх</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.textinputView}>
            <Text style={styles.textinputText}>Мфо</Text>
            <TextInput style={styles.textinput} />
          </View>
        </View>
        <View style={styles.buttonsection}>
          <Text style={styles.buttonsectionText}>
            Редактировать данный продавца
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingView;
