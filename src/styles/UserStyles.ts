import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UserStyles = StyleSheet.create({

  // CONTAINERS
  containerMaster: {
    flex: 1,
    backgroundColor: '#181F25',
  },
  containerProfile: {
    alignItems: 'center',
  },
  messageContainer: {
    marginTop: screenHeight * 0.025,
    height: screenHeight * 0.075,
  },
  //CONTAINERS

  // BUTTONS
  deleteButton: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.06,
    borderRadius: screenHeight * 0.01,
    top: screenHeight * 0.8,
    position: 'absolute',
    backgroundColor: '#e12f2f',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.065,
    borderRadius: screenHeight * 0.01,
    top: screenHeight * 0.55,
    position: 'absolute',
    backgroundColor: '#47992B',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //BUTTONS

  // INPUTS
  phoneInput: {
    width: screenWidth * 0.6,
    fontSize: screenHeight * 0.025,
    borderRadius: screenHeight * 0.01,
    marginTop: screenHeight * 0.05,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#101519',
    fontWeight: 'bold',
    color: 'white',
  },
  //INPUTS

  // TEXTS
  deleteText: {
    fontSize: screenHeight * 0.025,
    fontWeight: 'bold',
    color: 'white',
  },
  userName: {
    fontSize: screenHeight * 0.04,
    fontWeight: 'bold',
    color: 'white',
  },
  infoText: {
    fontSize: screenHeight * 0.025,
    marginTop: screenHeight * 0.01,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  saveText: {
    fontSize: screenHeight * 0.025,
    fontWeight: 'bold',
    color: 'white',
  },
  errorMessage: {
    fontSize: screenHeight * 0.02,
    fontWeight: 'bold',
    color: '#e12f2f',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  successMessage: {
    fontSize: screenHeight * 0.02,
    fontWeight: 'bold',
    color: '#47992B',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  //TEXTS

  // ICONS
  userIcon: {
    fontSize: screenHeight * 0.2,
    marginTop: screenHeight * 0.05,
  },
  exitIcon: {
    fontSize: screenHeight * 0.07,
    bottom: screenHeight * 0.15,
    left: screenWidth * 0.35,
    position: 'absolute',
  },
  //ICONS

});

export { UserStyles };