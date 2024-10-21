import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import CustomField from '../../../../../../components/CustomField';
import { className } from '../../../../../../utils/className';
import { GUARANTEE_PRENDARY_GENERAL_FIELDS, GUARANTEE_RESUME_FIELDS } from '../../../../../../fields/GuaranteesFields';
import { useGuarantees } from '../../../../../../navigations/GuaranteesContext';

export default function GuaranteePrendaryGeneralSection({ credit, handleChange, handleSubmit, values }) {
  const { selected } = useGuarantees()

  return (
    <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
      <Text>{JSON.stringify(selected)}</Text>
      <View style={className('flex flex-row flex-wrap')}>

        {GUARANTEE_RESUME_FIELDS.map((field, index) => (
          <CustomField
            field={field}
            handleChange={handleChange}
            values={values}
            key={index}
            columns={field?.columns}
            handleSubmit={handleSubmit}
          />
        ))}

        {GUARANTEE_PRENDARY_GENERAL_FIELDS.map((field, index) => (
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
  );
}