import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { ExitModalStyles } from '../styles/ExitModalStyles.ts';

const ExitModal = ({ visible, onExit, onCancel }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={ExitModalStyles.centeredView}>
        <View style={ExitModalStyles.modalView}>
          <Text style={ExitModalStyles.modalText}>Você quer realmente sair?</Text>

          <View style={ExitModalStyles.buttonsContainer}>
            <TouchableOpacity
              style={{ ...ExitModalStyles.button, backgroundColor: 'red' }}
              onPress={onExit}
            >
              <Text style={ExitModalStyles.textStyle}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...ExitModalStyles.button, backgroundColor: 'green' }}
              onPress={onCancel}
            >
              <Text style={ExitModalStyles.textStyle}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
