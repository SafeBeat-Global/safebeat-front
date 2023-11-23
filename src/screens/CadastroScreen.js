// IMPORTS DO REACT
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// IMPORTS DO PROPRIO PROJETO
import { CadastroStyles } from '../styles/CadastroStyles.ts';
import { validarNome, validarEmail, validarSenha, formatarTelefone } from '../components/CredentialsValidation.js';
import { CampoDeEntrada } from '../renders/CadastroRender.js';

const CadastroScreen = () => {

  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailColor, setEmailColor] = useState('#47992B');


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
      <CampoDeEntrada
        value={nome}
        setValue={setNome}
        validator={validarNome}
        iconName='user'
        placeholder='Digite seu nome'
        keyboardType='default'
      />
        <Text style={CadastroStyles.credencialsTitle}>EMAIL</Text>
        <View style={CadastroStyles.inputContainer}>
          <MaterialCommunityIcons
            style={{...CadastroStyles.emailIcon, color: emailColor}}
            name='email'
            color={emailColor}>
          </MaterialCommunityIcons>
          <TextInput
            style={{...CadastroStyles.input, borderColor: emailColor, color: emailColor}}
            onChangeText={(text) => setEmail(text)}
            onBlur={() => {
              if (!validarEmail(email)) {
                setEmailColor('red');
              } else {
                setEmailColor('#FDFDFF');
              }
            }}
            value={email} placeholder='Digite seu email'
            placeholderTextColor={emailColor}
            keyboardType='email-address'>
          </TextInput>
        </View>
        <Text style={CadastroStyles.credencialsTitle}>SENHA</Text>
        <CampoDeEntrada
          value={senha}
          setValue={setSenha}
          validator={validarSenha}
          iconName='lock'
          placeholder='Digite sua senha'
          keyboardType='default'
        />
        <Text style={CadastroStyles.credencialsTitle}>CONFIRMAR SENHA</Text>
        <CampoDeEntrada
          value={senha}
          setValue={setSenha}
          validator={validarSenha}
          iconName='lock'
          placeholder='Digite sua senha'
          keyboardType='default'
        />
        <Text style={CadastroStyles.credencialsTitle}>TELEFONE</Text>
        <CampoDeEntrada
          value={telefone}
          setValue={setTelefone}
          validator={formatarTelefone}
          iconName='phone'
          placeholder='Digite seu telefone'
          keyboardType='phone-pad'
        />
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Text style={CadastroStyles.alreadyHaveAccountText}>Já tenho uma conta</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={CadastroStyles.cadastrarButton}>
          <Text style={CadastroStyles.cadastrarText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CadastroScreen };