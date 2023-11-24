// IMPORTS DO REACT
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// IMPORTS DO PROPRIO PROJETO
import { LoginStyles } from '../styles/LoginStyles.ts';
import CredentialsValidation from '../components/CredentialsValidation.js';
import { InputField } from '../components/InputField.js';
import { handleLoginUser } from '../components/ApiService.js';

const LoginScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (email && pass) {
      setErrorMessage('');
    }
  }, [email, pass]);

  const loginUser = async () => {
    const token = await handleLoginUser(email, pass, setErrorMessage);
    if (token) {

      navigation.navigate('MyTabs');
    }
  };

  return (
    <View style={LoginStyles.containerMaster}>
      <View style={LoginStyles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }>
          <FontAwesome
            style={LoginStyles.arrowIcon}
            name='arrow-left'
            color='white'>
          </FontAwesome>
        </TouchableOpacity>
        <Text style={LoginStyles.titleText}>LOGIN</Text>
      </View>
      <View style={LoginStyles.body}>
        <Text style={LoginStyles.credencialsTitle}>EMAIL</Text>
        <InputField
          iconLibrary='MaterialCommunityIcons'
          value={email}
          setValue={setEmail}
          validator={CredentialsValidation.validateEmail}
          iconName='email'
          placeholder='Digite seu email'
          keyboardType='default'
        />
        <Text style={LoginStyles.credencialsTitle}>SENHA</Text>
        <InputField
          iconLibrary='FontAwesome'
          value={pass}
          setValue={setPass}
          validator={CredentialsValidation.validatePass}
          iconName='lock'
          placeholder='Digite sua senha'
          keyboardType='default'
          secureTextEntry={true}
        />
        <View style={LoginStyles.errorContainer}>
          {errorMessage ? <Text style={LoginStyles.errorMessage}>{errorMessage}</Text> : null}
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('SignUp')
          }>
          <Text style={LoginStyles.dontHaveAccountText}>Não tenho uma conta</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={loginUser}
          style={LoginStyles.loginButton}>
          <Text style={LoginStyles.loginText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { LoginScreen };