import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AlertModalStyles = StyleSheet.create({
  // CONTAINERS
  containerMaster: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  containerModal: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.18,
    backgroundColor: "#FDFDFF",
    borderRadius: screenWidth * 0.05,
  },
  buttonsContainer: {
    width: screenWidth * 0.8,
    marginTop: screenHeight * 0.02,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //CONTAINERS

  // BUTTONS
  button: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.3,
    borderRadius: screenWidth * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //BUTTONS

  // TEXTS
  modalText: {
    fontSize: screenHeight * 0.03,
    marginTop: screenHeight * 0.01,
    fontWeight: 'bold',
    textAlign: "center",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  textStyle: {
    fontSize: screenHeight * 0.03,
    fontWeight: 'bold',
    textAlign: "center",
    color: '#FDFDFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  //TEXTS
});

export { AlertModalStyles };