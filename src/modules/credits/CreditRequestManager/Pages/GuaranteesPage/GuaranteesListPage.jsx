import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { className } from '../../../../../utils/className';
import GuaranteeModal from './Sections/GuaranteeModal';
import GuaranteeItem from './Sections/GuaranteeItem';
import { useGuarantees } from '../../../../../navigations/GuaranteesContext';

export default function GuaranteesListPage({ 
  navigation, 
  credit

 }) {

  const {
    guarantees,
    setGuarantees,
    editingGuarantee,
    setEditingGuarantee,
    handleSubmit,
    handleEdit,
    handleDelete,
    modalVisible,
    setModalVisible,
    setSelected,
    selected
  } = useGuarantees()

  useEffect(() => {
    setSelected({})
  }, [])
  
  
  const handleGo = (item) => {
    console.log('Ir a', item.id);
    setSelected(item)
    navigation?.navigate("GuaranteeForm");
  };

  return (
    <View style={className("bg-gray-200 h-full p-4 dark:bg-gray-900")}>
      <Text style={className("text-black text-2xl font-bold mb-4 dark:text-white")}>Lista de Garantías</Text>
      <Text>Selected: {JSON.stringify(selected)}</Text>
      <FlatList
        data={guarantees}
        renderItem={({ item }) => (
          <GuaranteeItem
            item={item}
            onGo={handleGo}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={className("p-2 text-gray-600 text-center dark:text-gray-300")}>No hay garantías registradas</Text>
        }
      />
      <TouchableOpacity
        style={className("bg-blue-500 p-4 rounded-lg mt-4")}
        onPress={() => {
          setEditingGuarantee(null);
          setModalVisible(true);
        }}
      >
        <Text style={className("text-white text-center font-bold")}>Agregar Nueva Garantía</Text>
      </TouchableOpacity>
      <GuaranteeModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setEditingGuarantee(null);
        }}
        onSubmit={handleSubmit}
        initialValues={editingGuarantee}
      />
    </View>
  );
}
