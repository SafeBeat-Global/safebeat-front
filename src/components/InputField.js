import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import CredentialsValidation from './CredentialsValidation.js';
import { SignUpStyles } from '../styles/SignUpStyles.ts';


const Icon = ({ library, ...props }) => {
  switch (library) {
    case 'FontAwesome':
      return <FontAwesome {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;
    default:
      return null;
  }
};

const InputField = ({ value, setValue, validator, iconName, iconLibrary, formatar, maxLength, minLength, secureTextEntry, ...props }) => {

  const [color, setColor] = useState('#47992B');

  return (
    <View style={SignUpStyles.inputContainer}>
      <Icon
        library={iconLibrary}
        style={{...SignUpStyles.defaultIcon, color}}
        name={iconName}
        color={color}>
      </Icon>
      <TextInput
        style={{...SignUpStyles.input, color}}
        onChangeText={(text) => {
          const formattedText = formatar ? CredentialsValidation.formatPhone(text) : text;
          setValue(formattedText);
        }}
        onBlur={() => {
          if (minLength && value.length < minLength) {
            setColor('red');
          } else if (!validator(value)) {
            setColor('red');
          } else {
            setColor('#FDFDFF');
          }
        }}
        placeholderTextColor={color}
        value={value}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        {...props}>
      </TextInput>
    </View>
  );
};

export { InputField };