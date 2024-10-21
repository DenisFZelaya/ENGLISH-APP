import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { className } from '../../../../../../utils/className'
import { Formik } from 'formik';
import CustomField from '../../../../../../components/CustomField';
import { GUARANTE_RESUME_FIEDS, GUARANTEE_RESUME_FIELDS } from '../../../../../../fields/GuaranteesFields';
import { useGuarantees } from '../../../../../../navigations/GuaranteesContext';

export default function GuaranteeResumeSection({ credit, handleChange, handleSubmit, values }) {
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
        {GUARANTE_RESUME_FIEDS.map((field, index) => (
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