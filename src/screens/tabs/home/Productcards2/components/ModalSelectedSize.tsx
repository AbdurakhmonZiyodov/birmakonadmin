import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../../../../constants/color';

const OPTIONS = ['20 sm', '40 sm', '60 sm'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalSelectedSize = props => {
  const onPressItem = option => {
    props.changeModalSelect(false);
    props.setOptionSecond(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalSelect(false)}
      style={styles.container}>
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 4 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export { ModalSelectedSize };
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 370,
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textColor
  },
});
