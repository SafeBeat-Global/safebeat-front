import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContext } from './src/contexts/UserContext.js';

import { MenuScreen } from './src/screens/MenuScreen.js';
import { SignUpScreen } from './src/screens/SignUpScreen.js';
import { LoginScreen } from './src/screens/LoginScreen.js';
import MyTabs from './src/screens/MyTabs.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
