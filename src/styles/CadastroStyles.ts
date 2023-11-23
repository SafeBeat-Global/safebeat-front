import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CadastroStyles = StyleSheet.create({

  //CONTAINERS
  containerMaster: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181F25',
  },
  header: {
    flexDirection: 'row',
    marginTop: screenHeight * 0.05,
  },
  body: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.75,
    backgroundColor: '#47992B',
    marginTop: screenHeight * 0.05,
    borderRadius: screenWidth * 0.1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181F25',
    alignSelf: 'center',
    borderRadius: screenWidth * 0.03,
    height: screenHeight * 0.05,
    width: screenWidth * 0.73,
  },
  errorContainer: {
    height: screenHeight * 0.075,
  },
  // CONTAINERS

  //BUTTONS
  cadastrarButton: {
    backgroundColor: '#181F25',
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.07,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  // BUTTONS

  //INPUTS
  input: {
    flex: 1,
    position: 'absolute',
    left: screenWidth * 0.14,
    width: screenWidth * 0.6,
    fontSize: screenHeight * 0.022,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  // INPUTS

  //TEXTS
  titleText: {
    color: 'white',
    fontSize: screenHeight * 0.04,
    top: screenHeight * 0.01,
    fontWeight: 'bold',
  },
  credencialsTitle: {
    color: '#181F25',
    fontSize: screenHeight * 0.023,
    marginTop: screenHeight * 0.025,
    marginLeft: screenWidth * 0.06,
    fontWeight: 'bold',
  },
  alreadyHaveAccountText: {
    color: '#181F25',
    fontSize: screenHeight * 0.022, 
    textAlign: 'center',
    marginBottom: screenHeight *0.01,
    fontWeight: 'bold',
  },
  cadastrarText: {
    color: 'white',
    fontSize: screenHeight * 0.035,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorMessage: {
    fontSize: screenHeight * 0.02,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  // TEXTS

  //ICONS
  arrowIcon: {
    right: screenWidth * 0.15,
    position: 'absolute',
    fontSize: screenHeight * 0.07,
  },
  defaultIcon: {
    left: screenWidth * 0.04,
    fontSize: screenHeight * 0.04,
  },
  // ICONS
});

export { CadastroStyles };