import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const screenOptions = () => ({
  tabBarStyle: [
    {
      backgroundColor: '#101519',
      height: screenHeight * 0.11,
    },
    null,
  ],
  tabBarLabelStyle: {
    fontSize: screenHeight * 0.027,
    fontWeight: 'bold',
  },

});

export const iconStyles = {
  size: screenHeight * 0.05,
  color: '#47992B',
};
