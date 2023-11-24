import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UserStyles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: '#181F25',
  },
  containerProfile: {
    alignItems: 'center',
  },
  containerInfo: {

  },

  deleteButton: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.05,
    borderRadius: screenHeight * 0.01,
    marginTop: screenHeight * 0.3,
    backgroundColor: '#e12f2f',
    alignItems: 'center',
    alignSelf: 'center',
  },
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
    marginTop: screenHeight * 0.05,
    fontWeight: 'bold',
    color: 'white',
  },
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
});

export { UserStyles };