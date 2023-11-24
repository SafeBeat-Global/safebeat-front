
// IMPORTS DO REACT
import React from 'react';
import { View, Text } from 'react-native';

// IMPORTS DO PROJETO
import { HomeStyles } from '../../styles/HomeStyles.ts';

// Componente que renderiza as pressoes sanguineas
const BloodPressure = ({ systole, diastole, color }) => (
  <View style={HomeStyles.containerBloodPressure}>
    <View>
      <Text style={{...HomeStyles.bloodNumber, color}}>{systole}</Text>
      <Text style={HomeStyles.bloodPressureLabel}>SIS</Text>
      <Text style={HomeStyles.mmHgLabel}>mmHg</Text>
    </View>

    <View>
      <Text style={{...HomeStyles.bloodNumber, color}}>{diastole}</Text>
      <Text style={HomeStyles.bloodPressureLabel}>DIA</Text>
      <Text style={HomeStyles.mmHgLabel}>mmHg</Text>
    </View>
  </View>
);

export default BloodPressure;