import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeStyles = StyleSheet.create({

  //CONTAINERS
  containerMaster: {
    flex: 1,
    backgroundColor: '#181F25',
    alignItems: 'center',
  },
  containerButtons: {
    marginTop: screenHeight * 0.1,
  },
  // CONTAINERS

  //BUTTONS

  // BUTTONS

  //TEXTS

  // TEXTS

  //MISCELLANEOUS
  logo: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.25,
  },
  // MISCELLANEOUS
});

export { HomeStyles };