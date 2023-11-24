import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { HomeStyles } from '../../styles/HomeStyles';
import BloodPressure from '../../components/healthmetrics/BloodPressure.js';
import HeartRate from '../../components/healthmetrics/HeartRate.js';

const HomeScreen = () => {

  const [diastole, setDiastole] = useState(60);
  const [systole, setSystole] = useState(90);
  const [heartRate, setHeartRate] = useState(50);

  // Função para calcular a cor com base na distância do valor ideal
  const calculateColor = (value, ideal) => {
    const distance = Math.abs(value - ideal);
    const green = Math.max(255 - distance * 5, 0);
    const red = Math.min(distance * 5, 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDiastole(prevDiastole => {
        const newDiastole = prevDiastole + (Math.random() > 0.5 ? 1 : -1);
        return newDiastole >= 60 && newDiastole <= 90 ? newDiastole : prevDiastole;
      });
      setSystole(prevSystole => {
        const newSystole = prevSystole + (Math.random() > 0.5 ? 1 : -1);
        return newSystole >= 90 && newSystole <= 130 ? newSystole : prevSystole;
      });
      setHeartRate(prevHeartRate => {
        const newHeartRate = prevHeartRate + (Math.random() > 0.5 ? 2 : -2);
        return newHeartRate >= 40 && newHeartRate <= 200 ? newHeartRate : prevHeartRate;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={HomeStyles.containerMaster}>
      <Image
        style={HomeStyles.logo}
        source={require('../../assets/logo-only.png')}
      />
      <BloodPressure systole={systole} diastole={diastole} color={calculateColor((systole+diastole)/2, 95)} />
      <HeartRate heartRate={heartRate} color={calculateColor(heartRate, 70)} />
    </View>
  );
};

export default HomeScreen;
