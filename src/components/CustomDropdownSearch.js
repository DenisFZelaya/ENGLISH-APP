import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Button } from 'react-native';
import { className } from '../utils/className';

const CustomDropdownSearch = ({ options, selectedValue, onValueChange, title = "", field={} }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleClose = () => {
    setModalVisible(false);
    setSearchQuery('');
  };

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredOptions(options.filter(option => option.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredOptions(options);
    }
  };

  const getSelectedName = () => {
    const selectedOption = options.find(option => option.value === selectedValue);
    return selectedOption ? selectedOption.value + ' - ' +  selectedOption.name : "";
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
        onPress={() => setModalVisible(true)}
      >
        <View style={className('bg-purple-50 p-3 rounded flex flex-row justify-between items-center w-full dark:bg-gray-700')}>

          <Text style={className('dark:text-white')}>{getSelectedName()}</Text>

          <Text>🔎</Text>
        </View>
      </TouchableOpacity>


      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('justify-center ')}>
          <View style={className('h-full bg-white m-5 rounded p-5 dark:bg-gray-800')}>
          <View style={className('flex flex-row justify-between items-center mb-2')}>
              <Text style={className('font-semibold mb-2')}>{title}</Text>
              <TouchableOpacity
                style={className(' p-2 rounded bg-red-200 rounded-full')}
                onPress={() => setModalVisible(false)}
              >
                 <Text style={className('font-bold text-red-500')}>❌</Text>
              </TouchableOpacity>
            </View>

          
            <TextInput
              style={className('border border-gray-300 p-2 rounded mb-4 dark:bg-gray-700')}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={className('p-2 bg-gray-100 rounded-lg mb-2 flex flex-row justify-start items-center dark:bg-gray-700')}
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

export default CustomDropdownSearch;