import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeStyles } from '../styles/HomeStyles.ts';

const HeartRate = ({ heartRate, color }) => (
  <View>
    <Animatable.View animation={{ 0: { scale: 1 }, 0.5: { scale: 1.2 }, 1: { scale: 1 } }} iterationCount="infinite" duration={2500} style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name="heart" size={30} color="#900" />
      <Text style={{...HomeStyles.bloodNumber, color}}>{heartRate}</Text>
    </Animatable.View>
    <Text style={HomeStyles.bloodPressureLabel}>PUL / min</Text>
  </View>
);

export default HeartRate;