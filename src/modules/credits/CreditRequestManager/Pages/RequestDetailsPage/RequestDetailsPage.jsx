import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import { getData, storeData } from '../../../../../utils/storage';
import { CREDIT_REQUEST_FIELDS } from './../../../../../fields/CreditRequestFields';

/**
 * RequestSection - Componente para la sección de solicitud de crédito.
 * @returns {JSX.Element} Componente de React
 */
const RequestDetailPage = ({ credit }) => {
  const [initialValues, setInitialValues] = useState({
    creditRequestHashId: credit?.hashId,
  });
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Recuperar datos al montar el componente
    const fetchData = async () => {
      const storedData = await getData('credit_request_' + credit?.hashId);
      console.log("Datos recuperados credit_request_: ", storedData);

      if (storedData) {
        // Realiza el merge entre los datos recuperados y los valores iniciales existentes
        setInitialValues((prevValues) => ({
          ...prevValues,
          ...JSON.parse(storedData) // Datos recuperados de AsyncStorage
        }));
      }

      setIsLoading(false); // Datos cargados
    };

    fetchData();
  }, []);


  /**
   * Maneja el envío del formulario.
   * @param {Object} values - Valores del formulario
   */
  const handleSubmit = async (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de datos
    console.log('Form values:', values);

    try {
      // Almacena los datos usando await
      await storeData('credit_request_' + credit?.hashId, JSON.stringify(values));
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <ScrollView style={className('p-4 bg-white  dark:bg-gray-900')}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Text style={className('text-sm text-gray-600')}>
              {JSON.stringify(values)}
            </Text>
            <View style={className('flex flex-row flex-wrap ')}>
              {CREDIT_REQUEST_FIELDS.map((field, index) => (
                <CustomField
                  field={field}
                  handleChange={handleChange}
                  values={values}
                  key={index}
                  handleSubmit={handleSubmit}
                />
              ))}
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default RequestDetailPage;