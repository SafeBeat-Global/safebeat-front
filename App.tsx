import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MenuScreen } from './src/screens/MenuScreen.js';
import { CadastroScreen } from './src/screens/CadastroScreen.js';
import { LoginScreen } from './src/screens/LoginScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
