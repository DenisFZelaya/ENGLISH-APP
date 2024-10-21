import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { className } from '../utils/className';



const PhotoCard = ({ field, handleChange, values }) => {
  return (
    <View style={className('mb-4 border border-gray-300 rounded-lg p-4 dark:bg-gray-800 border-0')}>
      <View style={className('flex-row justify-between items-center mb-2')}>
        <Text style={className('text-lg font-bold')}>{field.label}</Text>
        {field.customProps.delete && (
          <TouchableOpacity>
            <Text>ICON</Text>
          </TouchableOpacity>
        )}
      </View>

      {values[field.name] ? (
        <Image
          source={{ uri: values[field.name] }}
          style={className('w-full h-40 rounded-lg mb-2')}
        />
      ) : (
        <View style={className('w-full h-40 bg-gray-200 rounded-lg mb-2 justify-center items-center')}>
           <Text>ICON</Text>
          <Text style={className('text-gray-500 mt-2')}>No hay foto</Text>
        </View>
      )}

      <View style={className('flex-row justify-around mb-2')}>
        {field.customProps.takePhoto && (
          <TouchableOpacity style={className('bg-blue-500 px-4 py-2 rounded rounded w-1/2 mr-1')}>
            <Text style={className('text-white')}>Tomar Foto</Text>
          </TouchableOpacity>
        )}
        {field.customProps.selectFromGallery && (
          <TouchableOpacity style={className('bg-green-500 px-4 py-2 rounded w-1/2 ml-1')}>
            <Text style={className('text-white')}>Galería</Text>
          </TouchableOpacity>
        )}
      </View>

      {field.customProps.description && (
        <TextInput
          style={className('bg-gray-100 p-2 rounded dark:bg-gray-700')}
          placeholder="Agregar descripción"
          onChangeText={handleChange(`${field.name}Description`)}
          value={values[`${field.name}Description`]}
          multiline
        />
      )}
    </View>
  );
};

export default PhotoCard;