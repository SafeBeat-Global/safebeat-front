import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import HomeScreen from './MenuBar/HomeScreen.js';
import ExamsScreen from './MenuBar/ExamsScreen.js';
import UserScreen from './MenuBar/UserScreen.js';
import { screenOptions, iconStyles } from './MenuBar/ScreenOptions.js';
import AlertModal from '../components/AlertModal.js';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

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

  const handleConfirm = () => {
    BackHandler.exitApp();
    setExitModalVisible(false);
  };

  const handleCancel = () => {
    setExitModalVisible(false);
  };

  return (
    <>
      <AlertModal
        visible={exitModalVisible}
        onExit={handleConfirm}
        onCancel={handleCancel}
        confirmationMessage="Deseja sair do aplicativo?"
      />
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen 
          name="Exames" 
          component={ExamsScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="newspaper-o" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="heart" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Perfil" 
          component={UserScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="user" size={focused ? screenHeight * 0.06 : screenHeight * 0.05} color={iconStyles.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyTabs;
