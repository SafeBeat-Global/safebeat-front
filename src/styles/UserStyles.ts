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
  //CONTAINERS

  // BUTTONS
  deleteButton: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.06,
    borderRadius: screenHeight * 0.01,
    marginTop: screenHeight * 0.2,
    backgroundColor: '#e12f2f',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.065,
    borderRadius: screenHeight * 0.01,
    marginTop: screenHeight * 0.05,
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