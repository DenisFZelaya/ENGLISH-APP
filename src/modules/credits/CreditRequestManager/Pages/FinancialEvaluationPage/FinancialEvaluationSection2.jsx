import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import { FINANCIAL_FIELDS_1, FINANCIAL_FIELDS_2, FINANCIAL_FIELDS_3, FINANCIAL_FIELDS_4, FINANCIAL_FIELDS_5, FINANCIAL_FIELDS_ACTIVOS, FINANCIAL_FIELDS_PASIVOS } from './FinancialEvaluationFields';


const FinancialEvaluationSection2 = ({ credit, handleChange, handleSubmit, values }) => {


  return (
    <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Situación Financiera
      </Text>

      <View style={className('flex flex-wrap flex-row')} >

        {FINANCIAL_FIELDS_ACTIVOS.map((field, index) => (
          <CustomField
            field={field}
            handleChange={handleChange}
            values={values}
            key={index}
            handleSubmit={handleSubmit}
          />
        ))}

        {FINANCIAL_FIELDS_PASIVOS.map((field, index) => (
          <CustomField
            field={field}
            handleChange={handleChange}
            values={values}
            key={index}
            handleSubmit={handleSubmit}
          />
        ))}
     
        <Text style={className('mt-4 text-sm text-gray-600')}>
          {JSON.stringify(values, null, 2)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default FinancialEvaluationSection2;