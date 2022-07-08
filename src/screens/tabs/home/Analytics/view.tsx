import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { IMAGE, IMAGES } from '../../../../assets/images/images';
import Header from '../../../../components/Header';
import Charts from './components/charts';
import { styles } from './style';

const AnalyticsView = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Header title="Аналитика" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}>
          <View style={styles.elevition}>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
          </View>
          <View style={styles.elevition}>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
            <View style={styles.sectionView}>
              <Image source={IMAGES.pieChart} style={styles.pieChartImg} />
            </View>
          </View>
        </View>
        <View>
          <Charts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsView;
