import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import CredentialsValidation from './CredentialsValidation';
import { CadastroStyles } from '../styles/CadastroStyles';


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
    <View style={CadastroStyles.inputContainer}>
      <Icon
        library={iconLibrary}
        style={{...CadastroStyles.defaultIcon, color}}
        name={iconName}
        color={color}>
      </Icon>
      <TextInput
        style={{...CadastroStyles.input, color}}
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