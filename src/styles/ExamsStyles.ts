import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ExamsStyles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: '#181F25',
    alignItems: 'center',
  },
  nothingHereText: {
    fontSize: screenHeight * 0.05,
    marginTop: screenHeight * 0.03,
    color: '#FDFDFF',
  },
  explanationText: {
    width: screenWidth * 0.8,
    fontSize: screenHeight * 0.023,
    marginTop: screenHeight * 0.1,
    textAlign: 'center',
    color: '#FDFDFF',
  },
  sadIcon: {
    fontSize: screenHeight * 0.2,
    marginTop: screenHeight * 0.07,
  },
});

export { ExamsStyles };