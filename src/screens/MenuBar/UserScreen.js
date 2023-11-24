import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo, handleDeleteUser } from '../../services/ApiService.js';
import { UserContext } from '../../contexts/UserContext.js';
import { UserStyles } from '../../styles/UserStyles.ts';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AlertModal from '../../components/AlertModal.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js'

const UserScreen = () => {
  const navigation = useNavigation();
  const { userEmail, setUserEmail } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo(userEmail);
      setUserInfo(info);
    };

    fetchUserInfo();
  }, []);

  const handleDelete = async () => {
    const result = await handleDeleteUser(userEmail);
    if (result) {
      setUserEmail(null);
      navigation.navigate('Menu');
    } else {
      console.error('Erro ao excluir o usuário');
    }
  };

  const handleDeleteConfirm = () => {
    setModalVisible(true);
  };

  const handleDeleteYes = () => {
    setModalVisible(false);
    handleDelete();
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

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
          <View style={UserStyles.containerInfo}>
            <Text style={UserStyles.infoText}>Email: {userInfo.email}</Text>
            <Text style={UserStyles.infoText}>Telefone: {userInfo.telefone}</Text>
          </View>
          <TouchableOpacity onPress={handleDeleteConfirm} style={UserStyles.deleteButton}>
            <Text style={UserStyles.deleteText}>Excluir Conta</Text>
          </TouchableOpacity>
          <AlertModal
            visible={modalVisible}
            onExit={handleDeleteYes}
            onCancel={handleCancel}
            confirmationMessage="Você tem certeza que deseja excluir sua conta?"
          />

        </>
      )}
    </View>
  );
};

export default UserScreen;
