import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import CustomField from '../../../../../../components/CustomField';
import { className } from '../../../../../../utils/className';
import { GUARANTE_NATURAL_PERSON_FIEDS } from '../../../../../../fields/GuaranteesFields';
import ErrorBoundary from '../../../../../../components/ErrorBoundary';

export default function GuaranteePNaturalSection({ credit, handleChange, handleSubmit, values }) {
  return (
    <ErrorBoundary>
      <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
        <View style={className('flex flex-row flex-wrap')}>
          {GUARANTE_NATURAL_PERSON_FIEDS.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
              columns={field?.columns}
              handleSubmit={handleSubmit}
            />
          ))}
        </View>
        <Text>
          {JSON.stringify(values)}
        </Text>
      </ScrollView>
    </ErrorBoundary>
  );
}