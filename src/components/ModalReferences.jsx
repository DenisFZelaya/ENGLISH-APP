import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Button } from 'react-native';
import { className } from '../utils/className';

const ModalReferences = ({ title = "", children, modalVisible, setModalVisible }) => {



  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={className('m-0 mb-1 dark:bg-gray-900')}>
      

      <TouchableOpacity
        style={className(' p-3 rounded bg-green-500 rounded-xl')}
        onPress={() => setModalVisible(true)}
      >
        <Text style={className('text-white font-bold')}>Agregar Referencia</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('w-full h-full')}>
          <View style={className('w-full h-full bg-white  rounded p-5 dark:bg-gray-900')}>
            <View style={className('flex flex-row justify-between items-center mb-2')}>
              <Text style={className('text-lg font-semibold mb-2')}>{title}</Text>
              <TouchableOpacity
                style={className(' p-2 rounded bg-red-500 rounded-full')}
                onPress={() => setModalVisible(false)}
              >
                <Text style={className('font-bold text-white')}>Cerrar</Text>
              </TouchableOpacity>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalReferences;