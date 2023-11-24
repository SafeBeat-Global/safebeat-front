// IMPORTS DO REACT
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

// IMPORTS DO PROJETO
import { MenuStyles } from '../styles/MenuStyles.ts';

// Tela inicial do aplicativo
const MenuScreen = ({navigation}) => {

  return (
    <View style={MenuStyles.containerMaster}>
      <Image
        style={MenuStyles.logo}
        source={require('../assets/safe-beat-transparent-1.png')}
      />
      <View style={MenuStyles.containerButtons}>
        <TouchableOpacity
          style={MenuStyles.cadastrarButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={MenuStyles.cadastrarText}>CADASTRE-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={MenuStyles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={MenuStyles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { MenuScreen };
