import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MenuStyles = StyleSheet.create({

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
  cadastrarButton: {
    backgroundColor: '#47992B',
    width: screenWidth * 0.65,
    height: screenHeight * 0.072,
    borderRadius: screenWidth * 0.08,
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#47992B',
    width: screenWidth * 0.65,
    height: screenHeight * 0.072,
    borderRadius: screenWidth * 0.08,
    justifyContent: 'center',
    marginTop: screenHeight * 0.04,
  },
  // BUTTONS

  //TEXTS
  cadastrarText: {
    color: '#FDFDFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: screenHeight * 0.035,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  loginText: {
    color: '#FDFDFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: screenHeight * 0.035,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  // TEXTS

  //MISCELLANEOUS
  logo: {
    width: screenWidth * 1.3,
    height: screenHeight * 0.4,
  },
  // MISCELLANEOUS
});

export { MenuStyles };