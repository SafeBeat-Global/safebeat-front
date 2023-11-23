import React from 'react';
import { View, Text } from 'react-native';
import { HomeStyles } from '../styles/HomeStyles.ts';

const BloodPressure = ({ systole, diastole, color }) => (
  <View style={HomeStyles.containerBloodPressure}>
    <View>
      <Text style={{...HomeStyles.systoleNumber, color}}>{systole}</Text>
      <Text style={HomeStyles.systoleLabel}>SIS</Text>
      <Text style={HomeStyles.mmHgLabel}>mmHg</Text>
    </View>

    <View>
      <Text style={{...HomeStyles.diastoleNumber, color}}>{diastole}</Text>
      <Text style={HomeStyles.diastoleLabel}>DIA</Text>
      <Text style={HomeStyles.mmHgLabel}>mmHg</Text>
    </View>
  </View>
);

export default BloodPressure;