// IMPORTS DO REACT
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// IMPORTS DO PROPRIO PROJETO
import { CadastroStyles } from '../styles/CadastroStyles.ts';

const CadastroScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

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
        <Text style={CadastroStyles.credencialsTitle}>EMAIL</Text>
        <View style={CadastroStyles.inputContainer}>
          <MaterialCommunityIcons
            style={CadastroStyles.emailIcon}
            name='email'
            color='#47992B'>
          </MaterialCommunityIcons>
          <TextInput
            style={CadastroStyles.input}
            onChangeText={(text) =>
              setEmail(text)
            }
            value={email} placeholder='Digite seu email'
            placeholderTextColor="#47992B"
            keyboardType='email-address'>
          </TextInput>
        </View>
        <Text style={CadastroStyles.credencialsTitle}>SENHA</Text>
        <View style={CadastroStyles.inputContainer}>
          <FontAwesome
            style={CadastroStyles.lockIcon}
            name='lock'
            color='#47992B'>
          </FontAwesome>
          <TextInput
            style={CadastroStyles.input}
            onChangeText={(text) =>
              setSenha(text)
            }
            value={senha} placeholder='Digite sua senha'
            placeholderTextColor="#47992B"
            keyboardType='default'
            secureTextEntry={true}>
          </TextInput>
        </View>
        <Text style={CadastroStyles.credencialsTitle}>CONFIRMAR SENHA</Text>
        <View style={CadastroStyles.inputContainer}>
          <FontAwesome
            style={CadastroStyles.lockIcon}
            name='lock'
            color='#47992B'>  
          </FontAwesome>
          <TextInput
            style={CadastroStyles.input}
            onChangeText={(text) =>
              setConfirmarSenha(text)
            }
            value={confirmarSenha}
            placeholder='Confirme sua senha'
            placeholderTextColor="#47992B"
            keyboardType='default'
            secureTextEntry={true}>
          </TextInput>
        </View>
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
