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
  containerBloodPressure: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 0.7,
  },
  // CONTAINERS

  //BUTTONS

  // BUTTONS

  //TEXTS
  systoleNumber: {
    fontSize: screenHeight * 0.07,
    fontWeight: 'bold',
  },
  systoleLabel: {
    fontSize: screenHeight * 0.03,
    color: '#FDFDFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  diastoleNumber: {
    fontSize: screenHeight * 0.07,
    fontWeight: 'bold',
  },
  diastoleLabel: {
    fontSize: screenHeight * 0.03,
    color: '#FDFDFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  mmHgLabel: {
    fontSize: screenHeight * 0.023,
    color: '#FDFDFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  heartRateNumber: {
    fontSize: screenHeight * 0.07,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  heartRateLabel: {
    fontSize: screenHeight * 0.03,
    color: '#FDFDFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  // TEXTS

  //MISCELLANEOUS
  logo: {
    marginTop: screenHeight * 0.03,
    width: screenWidth * 0.7,
    height: screenHeight * 0.25,
  },
  // MISCELLANEOUS
});

export { HomeStyles };