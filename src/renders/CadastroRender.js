import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { CadastroStyles } from '../styles/CadastroStyles';

export const CampoDeEntrada = ({ value, setValue, validator, iconName, ...props }) => {
  const [color, setColor] = useState('#47992B');

  return (
    <View style={CadastroStyles.inputContainer}>
      <FontAwesome
        style={{...CadastroStyles.defaultIcon, color}}
        name={iconName}
        color={color}>
      </FontAwesome>
      <TextInput
        style={{...CadastroStyles.input, borderColor: color, color}}
        onChangeText={setValue}
        onBlur={() => {
          if (!validator(value)) {
            setColor('red');
          } else {
            setColor('#FDFDFF');
          }
        }}
        placeholderTextColor={color}
        value={value}
        {...props}>
      </TextInput>
    </View>
  );
};