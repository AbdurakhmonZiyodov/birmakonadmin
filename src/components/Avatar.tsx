import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { PlusIcon } from '../assets/icons/icon';
import { COLORS } from '../constants/color';

const Avatar = () => {
  const [image, setImage] = useState<string | undefined>('');
  const onPhotoUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, ({ assets }) => {
      if (assets) {
        setImage(assets[0].uri);
      }
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPhotoUpload}>
      <View style={styles.img}>
        {/* <Image
          style={styles.avatar}
          source={{
            uri: image
              ? image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU',
          }}
        /> */}
        <View style={styles.opacity}>
          <PlusIcon fill={COLORS.white} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Avatar;
const styles = StyleSheet.create({
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 5,
    position: 'absolute',
  },

  img: {
    width: 65,
    height: 65,
    borderRadius: 5,
  },
  opacity: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
