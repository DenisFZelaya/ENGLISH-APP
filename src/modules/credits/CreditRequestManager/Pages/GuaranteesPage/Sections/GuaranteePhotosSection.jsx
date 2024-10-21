import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { className } from '../../../../../../utils/className';
import CustomField from '../../../../../../components/CustomField';
import { GUARANTE_PHOTOS_FIEDS } from '../../../../../../fields/GuaranteesFields';

export default function GuaranteePhotosSection({credit}) {
  return (
    <Formik
      initialValues={{
       
      }}
      onSubmit={values => {
        console.log(values);
        // Aquí puedes manejar el envío de datos
      }}>
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
          <View style={className('flex flex-row flex-wrap')}>
          {GUARANTE_PHOTOS_FIEDS.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
              columns={field?.columns}
            />
          ))}
          </View>
       
          <Text>
            {JSON.stringify(values)}
          </Text>
        </ScrollView>
      )}
    </Formik>
  );
}