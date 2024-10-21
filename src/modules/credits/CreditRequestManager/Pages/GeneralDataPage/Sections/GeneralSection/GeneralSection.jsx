import React from 'react';
import { View, Text, ScrollView, Button, ActivityIndicator } from 'react-native';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import { CUSTOMER_GENERAL_INFORMATION } from '../../../../../../../fields/CustomerFields';

const GeneralSection = ({ handleChange, handleSubmit, values, isLoading,errors, touched }) => {

  // Muestra un indicador de carga mientras los datos se están recuperando
  if (isLoading) {
    return (
      <View style={className('h-full p-4 bg-white dark:bg-gray-900')}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    )
  }

  return (
    <ScrollView style={className('h-full p-4 bg-white dark:bg-gray-900')}>
      <View>
        <View style={className('flex flex-row flex-wrap')}>
          {CUSTOMER_GENERAL_INFORMATION.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
              columns={field?.columns}
              errors={errors} // Pasar los errores a la sección
              touched={touched} // Para mostrar los errores cuando el campo ha sido tocado
            />
          ))}
        </View>
      
        <Text>
          {JSON.stringify(values)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default GeneralSection;
