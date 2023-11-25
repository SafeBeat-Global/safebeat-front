// IMPORTS DO REACT
import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// IMPORTS DO PROJETO
import { screenOptions, iconStyles } from './menubar/ScreenOptions.js';
import HomeScreen from './menubar/HomeScreen.js';
import ExamsScreen from './menubar/ExamsScreen.js';
import UserScreen from './menubar/UserScreen.js';
import AlertModal from '../components/AlertModal.js';


const screenHeight = Dimensions.get('window').height;

const BottomTab = createBottomTabNavigator();

// Renderizacao do menu tab
const MyTabs = () => {
  const [exitModalVisible, setExitModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      setExitModalVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleExitYes = () => {
    BackHandler.exitApp();
    setExitModalVisible(false);
  };

  const handleExitCancel = () => {
    setExitModalVisible(false);
  };

  return (
    <>
      <AlertModal
        visible={exitModalVisible}
        onExit={handleExitYes}
        onCancel={handleExitCancel}
        confirmationMessage="Deseja sair do aplicativo?"
      />
      <BottomTab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <BottomTab.Screen 
          name="Exames" 
          component={ExamsScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="newspaper-o" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
        <BottomTab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="heart" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
        <BottomTab.Screen 
          name="Perfil" 
          component={UserScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="user" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default MyTabs;
