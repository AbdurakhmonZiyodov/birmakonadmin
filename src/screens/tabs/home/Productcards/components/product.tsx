import { useNavigation } from '@react-navigation/native';
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../../../../constants/color';
import { baseUrl } from '../../../../../api';
import { useAppDispatch } from '../../../../../redux/hooks';
import { onLockProduct, onUnlockProduct } from '../../../../../redux/slices/productCards';
import { ProductAsyncRequests } from '../../../../../redux/slices/product';
const ProductItem = (props: any) => {
  const [isEnabled, setIsEnabled] = useState(props?.status === 1);
  const dispatch: any = useAppDispatch()
  const id = props?.id

  const toggleSwitch = () => setIsEnabled(previousState => {
    if (previousState) {
      dispatch(onLockProduct(id))
    } else {
      dispatch(onUnlockProduct(id))
    }
    return !previousState
  });

  const navigation = useNavigation();



  return (
    <>
      <View style={{ position: "relative" }}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Image source={{ uri: baseUrl + props?.photo }} style={styles.image} />
            <View style={styles.absolute}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{ marginRight: 75 }}>
                  <IconButton
                    icon={props => <Icon name="close" {...props} size={30} />}
                    color="red"
                    onPress={() => props?.onModalVisibleHandler(props?.id)}
                  />
                </View>
                <Switch
                  trackColor={{ false: '#767577', true: '#fff' }}
                  thumbColor={isEnabled ? COLORS.orange : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={styles.discount}>
                <Text style={styles.dscountText}>{props?.discount}%</Text>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.row}>
                <Text style={styles.brand}>{props?.category?.name}</Text>
                <Text style={styles.brand}>{props?.shop?.name}</Text>
              </View>
              <View>
                <Text style={{ marginTop: 5, color: COLORS.textColor }}>
                  {props?.name}
                </Text>
              </View>
              <Text style={styles.name}>{props?.price_old}</Text>
              <Text style={styles.price}>{props?.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(ProductAsyncRequests.onUpdateProduct(props?.id))
                navigation.navigate('ext. product', { productId: props?.id })
              }} style={styles.wrapView}>
              <Text style={styles.wrapText} >Изменить</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback >
      </View>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  dscountText: { fontSize: 12, color: COLORS.textColor },
  discount: {
    borderRadius: 30,
    padding: 8,
    backgroundColor: '#F4D4CF',
  },
  absolute: {
    position: 'absolute',
    right: 10,
    top: 10,
    justifyContent: 'space-between',
    height: 162,
    alignItems: 'flex-end',
  },
  cartText: {
    color: COLORS.white,
    marginRight: 4,
    fontWeight: '700',
  },
  inactiveCartText: {
    color: COLORS.textColor,
    marginRight: 8,
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    marginHorizontal: 0,
  },
  price: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '500',
  },
  name: {
    color: COLORS.background,
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    marginTop: 7,
  },
  brand: {
    color: COLORS.gray,
    fontSize: 11,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: Dimensions.get('window').width / 2 - 25,
    marginVertical: 15,
    // marginHorizontal: 5,
  },
  details: {
    paddingHorizontal: 8,
    paddingBottom: 24,
    paddingTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  inactiveButton: {},
  wrapView: {
    backgroundColor: COLORS.background,
    marginBottom: 30,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  wrapText: {
    color: COLORS.white,
    textAlign: 'center',
  },
});
