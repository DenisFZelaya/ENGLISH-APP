import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import { FINANCIAL_SIT_FINAN } from './FinancialEvaluationFields';

const FinancialEvaluationPage = ({ credit, handleChange, handleSubmit, values }) => {
  return (
    <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
      <View style={className('flex flex-wrap flex-row')} >
        {FINANCIAL_SIT_FINAN.map((field, index) => (
          <CustomField
            field={field}
            handleChange={handleChange}
            values={values}
            handleSubmit={handleSubmit}
            key={index}
          />
        ))}
        <Text style={className('mt-4 text-sm text-gray-600')}>
          {JSON.stringify(values, null, 2)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default FinancialEvaluationPage;