import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {COLORS} from '../../../../../constants/color';

const charts = () => {
  return (
    <View style={{marginTop: 50}}>
      <ScrollView
        style={{marginLeft: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={1000} // from react-native
          height={220}
          yAxisLabel="-3"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: COLORS.grey,
            backgroundGradientFrom: COLORS.white,
            backgroundGradientTo: '#fff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `#EE4927`,
            labelColor: (opacity = 1) => `gray`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: 'gray',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default charts;

const styles = StyleSheet.create({});
