import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { AlertModalStyles } from '../styles/AlertModalStyles.ts';

const AlertModal = ({ visible, onExit, onCancel, confirmationMessage }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={AlertModalStyles.centeredView}>
        <View style={AlertModalStyles.modalView}>
          <Text style={AlertModalStyles.modalText}>{confirmationMessage}</Text>

          <View style={AlertModalStyles.buttonsContainer}>
            <TouchableOpacity
              style={{ ...AlertModalStyles.button, backgroundColor: '#e12f2f' }}
              onPress={onExit}
            >
              <Text style={AlertModalStyles.textStyle}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...AlertModalStyles.button, backgroundColor: '#47992B' }}
              onPress={onCancel}
            >
              <Text style={AlertModalStyles.textStyle}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
