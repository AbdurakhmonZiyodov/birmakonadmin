import React from 'react';
import {View} from 'react-native';
import {GreyStarIcon, OrangeStarIcon} from '../assets/icons/icon';

interface IRatingProps {
  value: number;
  sum: number;
}

const Rating = ({value, sum}: IRatingProps) => {
  const arr = new Array(sum).fill(1);

  return (
    <View style={{flexDirection: 'row'}}>
      {arr.map((e, i) =>
        i <= value - 1 ? (
          <OrangeStarIcon style={{marginLeft: 4}} key={i} />
        ) : (
          <GreyStarIcon style={{marginLeft: 4}} key={i} />
        ),
      )}
    </View>
  );
};

export default Rating;
