// IMPORTS DO REACT
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// IMPORTS DO PROPRIO PROJETO
import { LoginStyles } from '../styles/LoginStyles.ts';

const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
        <View style={LoginStyles.inputContainer}>
          <MaterialCommunityIcons
            style={LoginStyles.emailIcon}
            name='email'
            color='#47992B'>
          </MaterialCommunityIcons>
          <TextInput
            style={LoginStyles.input}
            onChangeText={(text) =>
              setEmail(text)
            }
            value={email} placeholder='Digite seu email'
            placeholderTextColor="#47992B"
            keyboardType='email-address'>
          </TextInput>
        </View>
        <Text style={LoginStyles.credencialsTitle}>SENHA</Text>
        <View style={LoginStyles.inputContainer}>
          <FontAwesome
            style={LoginStyles.lockIcon}
            name='lock'
            color='#47992B'>
          </FontAwesome>
          <TextInput
            style={LoginStyles.input}
            onChangeText={(text) =>
              setSenha(text)
            }
            value={senha} placeholder='Digite sua senha'
            placeholderTextColor="#47992B"
            keyboardType='default'
            secureTextEntry={true}>
          </TextInput>
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Cadastro')
          }>
          <Text style={LoginStyles.alreadyHaveAccountText}>Não tenho uma conta</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={LoginStyles.loginButton}
            onPress={() =>
            navigation.navigate('Home')
          }>
          <Text style={LoginStyles.loginText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { LoginScreen };
