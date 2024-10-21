import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import { CUSTOMER_ADDITIONAL_FIELDS } from '../../../../../../../fields/CustomerFields';

/**
 * AdditionalSection - Componente para la sección de datos adicionales del solicitante.
 * @returns {JSX.Element} Componente de React
 */
const AdditionalSection = ({ handleChange, handleSubmit, values, isLoading }) => {

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
        <View style={className('flex flex-row flex-wrap ')}>
          {CUSTOMER_ADDITIONAL_FIELDS.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
            />
          ))}
        </View>
        <Text style={className('mt-4 text-sm text-gray-600')}>
          {JSON.stringify(values, null, 2)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AdditionalSection;