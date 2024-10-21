import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Button } from 'react-native';
import { className } from '../utils/className';

const CustomDropdown = ({ options, selectedValue, onValueChange, title = "", field = {} }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
  };

  const getSelectedName = () => {
    const selectedOption = options.find(option => option.value === selectedValue);
    return selectedOption ? selectedOption?.value + ' - ' + selectedOption?.name : "";
  };

  if (field?.customProps?.editable === false) {
    return <View style={className('bg-purple-50 p-3 rounded flex flex-row justify-between items-center w-full dark:bg-gray-700')}>
      <Text style={className('text-gray-400 dark:text-white')}>{getSelectedName()}</Text>
    </View>
  }

  return (
    <View style={className('m-0 mb-1')}>
      <TouchableOpacity
        style={className(' ')}
        onPress={() =>  setModalVisible(true)}
      >
        <View style={className('bg-purple-50 p-3 rounded flex flex-row justify-between items-center w-full dark:bg-gray-700')}>
          <Text style={className('dark:text-white')}>{getSelectedName()}</Text>
          <Text style={className('text-green-500')}>🔽</Text>
        </View>
      </TouchableOpacity>


      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('flex-1 justify-center bg-black bg-opacity-50')}>
          <View style={className('bg-white m-5 rounded p-5  dark:bg-gray-800')}>

            <View style={className('flex flex-row justify-between items-center mb-2')}>
              <Text style={className('text-lg font-semibold mb-2')}>{title}</Text>
              <TouchableOpacity
                style={className(' p-2 rounded bg-red-200 rounded-full shadow-xl')}
                onPress={() => setModalVisible(false)}
              >
                <Text style={className('font-bold text-red-500')}>❌</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={className('p-2 bg-gray-100 rounded-lg mb-2 flex flex-row justify-start items-center  dark:bg-gray-700')}
                  onPress={() => handleSelect(item.value)}
                >
                  {selectedValue === item.value && <View style={className('bg-green-300 w-5 h-5 rounded-full mr-2 shadow-xl')}></View>}
                  <Text style={className('dark:text-white')}>{item.value} - {item.name}</Text>
                </TouchableOpacity>
              )}
            />

          </View>
        </View>
      </Modal>
    </View>
  );
};


export default CustomDropdown;