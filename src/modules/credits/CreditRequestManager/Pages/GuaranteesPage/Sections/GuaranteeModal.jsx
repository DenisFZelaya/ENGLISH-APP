import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../utils/className';
import CustomField from '../../../../../../components/CustomField';
import ErrorBoundary from '../../../../../../components/ErrorBoundary';
import { GUARANTEE_FIELDS } from '../../../../../../fields/GuaranteeListFields';

const GuaranteeModal = ({ visible, onClose, onSubmit, initialValues }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={className("flex-1 justify-center items-center bg-black bg-opacity-50")}>
        <View style={className("bg-white p-6 rounded-lg w-11/12 max-w-md")}>
          <Formik
            initialValues={initialValues || {
              guaranteeType: '',
              coverage: '',
              salaryAvaluation: '',
              obligationType: '',
              avalIdentification: '',
            }}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
              <View style={className("flex flex-row flex-wrap")}>
                <ErrorBoundary>
                  {GUARANTEE_FIELDS.map((field, index) => (
                    (!field?.conditionalRender || field?.conditionalRender(values)) && (
                      <CustomField
                        key={index}
                        field={field}
                        handleChange={handleChange}
                        values={values}
                        //setFieldValue={setFieldValue}
                        handleSubmit={handleSubmit}
                      />
                    )
                  ))}
                </ErrorBoundary>
                <View style={className("flex-row justify-end mt-4")}>
                  <View style={className("w-1/2")}>
                    <TouchableOpacity
                      style={className("bg-red-500 p-3 rounded-lg mr-2")}
                      onPress={onClose}
                    >
                      <Text style={className("text-white font-bold text-center")}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={className("w-1/2")}>
                    <TouchableOpacity
                      style={className("bg-green-500 p-3 rounded-lg")}
                      onPress={handleSubmit}
                    >
                      <Text style={className("text-white font-bold text-center")}>Guardar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>

    </Modal>
  );
};

export default GuaranteeModal;