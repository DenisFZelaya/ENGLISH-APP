import React from 'react';
import { View, Text, ScrollView, Button, ActivityIndicator } from 'react-native';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import { CUSTOMER_BUSINESS_FIELDS, CUSTOMER_LABORAL_INFORMATION } from '../../../../../../../fields/CustomerFields';
const LaboralSection = ({ handleChange, handleSubmit, values, isLoading }) => {

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
          {CUSTOMER_LABORAL_INFORMATION.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
            />
          ))}
          {CUSTOMER_BUSINESS_FIELDS.map((field, index) => (
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

export default LaboralSection;