import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import ModalReferences from '../../../../../components/ModalReferences';
import { REFERENCE_FIELDS } from './PersonalReferencesFields';
import { getData, storeData } from '../../../../../utils/storage';
import CATALOGS from "../../../../../constants/CATALOGS.json"

const PersonalReferencesPage = ({ credit }) => {
  const [references, setReferences] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const storageKey = `references_${credit?.hashId}`;

  useEffect(() => {
    loadReferences();
  }, []);

  const loadReferences = async () => {
    const storedReferences = await getData(storageKey);
    if (storedReferences) {
      setReferences(JSON.parse(storedReferences));
    }
  };

  const saveReferences = async (newReferences) => {
    await storeData(storageKey, JSON.stringify(newReferences));
    setReferences(newReferences);
  };

  const initialValues = {
    // Define tus valores iniciales aquí
    tipoReferencia: '',
    nombreReferente: '',
    // ... otros campos
  };

  const handleSubmit = (values) => {
    let updatedReferences;
    if (isEditing) {
      updatedReferences = references.map((ref, index) =>
        index === editingIndex ? values : ref
      );
    } else {
      updatedReferences = [...references, values];
    }
    saveReferences(updatedReferences);
    resetModalState();
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setModalVisible(true);
  };

  const handleDelete = (index) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    saveReferences(updatedReferences);
  };

  const resetModalState = () => {
    setIsEditing(false);
    setEditingIndex(null);
    setModalVisible(false);
  };

  const openAddModal = () => {
    resetModalState();
    setModalVisible(true);
  };

  return (
    <View style={className('p-4 h-full bg-white dark:bg-gray-900')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Referencias Personales
      </Text>

      <FlatList
        data={references}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={className('bg-gray-100 p-4 mb-4 rounded-lg dark:bg-gray-800')}>
            <Text style={className('font-bold')}>{item.nombreReferente}</Text>
            <Text>{CATALOGS.typePersonalReferences?.find(c => c.value === item.tipoReferencia).name}</Text>
            <View style={className('flex-row justify-end mt-2')}>
              <TouchableOpacity onPress={() => handleEdit(index)} style={className('mr-2 w-1/3')}>
                <View style={className('bg-orange-200 p-2 rounded-lg items-center')}>
                  <Text style={className('text-orange-500 items-center')}>Editar</Text>
                </View>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <View style={className('bg-red-200 p-2 rounded-lg')}>
                  <Text style={className('text-red-500')}>Eliminar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <ModalReferences
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={isEditing ? 'Editar Referencia' : 'Agregar Nueva Referencia'}
      >
        <Formik
          initialValues={isEditing ? references[editingIndex] : initialValues}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, values }) => (
            <ScrollView style={className('dark:bg-gray-900')}>
              <View>
                <View style={className('flex flex-row flex-wrap')}>
                  {REFERENCE_FIELDS.map((field, index) => (
                    <CustomField
                      field={field}
                      handleChange={handleChange}
                      values={values}
                      key={index}
                    />
                  ))}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                >
                  <View style={className('bg-green-500 p-3 rounded-lg')}>
                    <Text style={className('text-white font-bold text-center')}>
                      {isEditing ? "Actualizar Referencia" : "Agregar Referencia"}
                    </Text>
                  </View>

                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </Formik>
      </ModalReferences>
    </View>
  );
};

export default PersonalReferencesPage;