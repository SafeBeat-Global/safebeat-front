import React from 'react';
import { View, Text } from 'react-native';
import { ExamsStyles } from '../../styles/ExamsStyles.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ExamsScreen = () => (
  <View style={ExamsStyles.containerMaster}>
    <MaterialCommunityIcons
      style={ExamsStyles.sadIcon}
      name='emoticon-sad'
      color='white'>
              
    </MaterialCommunityIcons>
    <Text style={ExamsStyles.nothingHereText}>Não há nada aqui!</Text>
    <Text style={ExamsStyles.explanationText}>{`Você não tem nenhum exame feito com a gente :(`}</Text>
  </View>
);

export default ExamsScreen;