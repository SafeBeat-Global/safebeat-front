import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { HomeStyles } from '../styles/HomeStyles.ts';

const HomeScreen = ({navigation}) => {

  return (
    <View style={HomeStyles.containerMaster}>
      <Image
        style={HomeStyles.logo}
        source={require('../assets/logo-only.png')}
      />
    </View>
  );
};

export { HomeScreen };