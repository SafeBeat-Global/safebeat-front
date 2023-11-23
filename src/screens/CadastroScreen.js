// IMPORTS DO REACT
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// IMPORTS DO PROPRIO PROJETO
import { handleRegisterUser } from '../components/ApiService.js';
import { CadastroStyles } from '../styles/CadastroStyles.ts';
import CredentialsValidation from '../components/CredentialsValidation.js';
import { InputField } from '../components/InputField.js';

const CadastroScreen = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [phone, setPhone] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name && email && pass && confirmPass && phone) {
      setErrorMessage('');
    }
  }, [name, email, pass, confirmPass, phone]);

  return (
    <View style={CadastroStyles.containerMaster}>
      <View style={CadastroStyles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }>
          <FontAwesome
            style={CadastroStyles.arrowIcon}
            name='arrow-left'
            color='white'>
          </FontAwesome>
        </TouchableOpacity>
        <Text style={CadastroStyles.titleText}>CADASTRO</Text>
      </View>
      <View style={CadastroStyles.body}>
      <Text style={CadastroStyles.credencialsTitle}>NOME</Text>
      <InputField
        iconLibrary='FontAwesome'
        value={name}
        setValue={setName}
        validator={CredentialsValidation.validateName}
        iconName='user'
        placeholder='Digite seu nome'
        keyboardType='default'
      />
        <Text style={CadastroStyles.credencialsTitle}>EMAIL</Text>
        <InputField
          iconLibrary='MaterialCommunityIcons'
          value={email}
          setValue={setEmail}
          validator={CredentialsValidation.validateEmail}
          iconName='email'
          placeholder='Digite seu email'
          keyboardType='default'
        />
        <Text style={CadastroStyles.credencialsTitle}>SENHA</Text>
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
        <Text style={CadastroStyles.credencialsTitle}>CONFIRMAR SENHA</Text>
        <InputField
          iconLibrary='FontAwesome'
          value={confirmPass}
          setValue={setConfirmPass}
          validator={() => CredentialsValidation.validateConfirmPass(pass, confirmPass)}
          iconName='lock'
          placeholder='Digite sua senha'
          keyboardType='default'
          secureTextEntry={true}
        />
        <Text style={CadastroStyles.credencialsTitle}>TELEFONE</Text>
        <InputField
          iconLibrary='FontAwesome'
          value={phone}
          setValue={setPhone}
          validator={CredentialsValidation.validatePhone}
          iconName='phone'
          placeholder='Digite seu telefone'
          keyboardType='phone-pad'
          formatar={true}
          maxLength={15}
          minLength={15}
        />
        <View style={CadastroStyles.errorContainer}>
          {errorMessage ? <Text style={CadastroStyles.errorMessage}>{errorMessage}</Text> : null}
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Text style={CadastroStyles.alreadyHaveAccountText}>Já tenho uma conta</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={CadastroStyles.cadastrarButton}
          onPress={() => handleRegisterUser(name, email, pass, confirmPass, phone, setErrorMessage)}>
          <Text style={CadastroStyles.cadastrarText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CadastroScreen };