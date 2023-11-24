// IMPORTS DO REACT
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// IMPORTS DO PROJETO
import { getUserInfo, handleDeleteUser, handleUpdateUserPhone } from '../../services/ApiService.js';
import { UserContext } from '../../contexts/UserContext.js';
import { UserStyles } from '../../styles/UserStyles.ts';
import CredentialsValidation from '../../components/CredentialsValidation.js';
import AlertModal from '../../components/AlertModal.js';


// Tela do perfil do usuario
const UserScreen = () => {

  const navigation = useNavigation();

  const { userEmail, setUserEmail } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  const [newPhone, setNewPhone] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo(userEmail);
      setUserInfo(info);
      setNewPhone(info.telefone);
    };

    fetchUserInfo();
  }, []);

  // Funcao que chama o metodo DELETE
  const handleDelete = async () => {
    const result = await handleDeleteUser(userEmail);
    if (result) {
      setUserEmail(null);
      navigation.navigate('Menu');
    } else {
      console.error('Erro ao excluir o usuário');
    }
  };

  // Modal
  const handleDeleteAlert = () => {
    setModalVisible(true);
  };

  const handleDeleteYes = () => {
    setModalVisible(false);
    handleDelete();
  };

  const handleDeleteCancel = () => {
    setModalVisible(false);
  };

  // Funcao de logout
  const handleLogout = () => {
    setUserEmail(null);
    navigation.navigate('Menu');
  };


  return (
    <View style={UserStyles.containerMaster}>
      {userInfo && (
        <>
          <View style={UserStyles.containerProfile}>
            <FontAwesome
              style={UserStyles.userIcon}
              name='user-circle-o'
              color='white'>
            </FontAwesome>
            <TouchableOpacity onPress={handleLogout}>
              <MaterialCommunityIcons
                style={UserStyles.exitIcon}
                name='exit-to-app'
                color='white'>
              </MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={UserStyles.userName}>{userInfo.nome}</Text>
          </View>
          <Text style={UserStyles.infoText}>{userInfo.email}</Text>
            <TextInput
                style={UserStyles.phoneInput}
                value={newPhone}
                keyboardType='phone-pad'
                maxLength={15}
              />
            <TouchableOpacity
              style={UserStyles.saveButton}
            >
              <Text style={UserStyles.saveText}>Salvar Alterações</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteAlert} style={UserStyles.deleteButton}>
            <Text style={UserStyles.deleteText}>Excluir Conta</Text>
          </TouchableOpacity>
          <AlertModal
            visible={modalVisible}
            onExit={handleDeleteYes}
            onCancel={handleDeleteCancel}
            confirmationMessage="Você tem certeza que deseja excluir sua conta?"
          />
        </>
      )}
    </View>
  );
};

export default UserScreen;
