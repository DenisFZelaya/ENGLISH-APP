import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Formik } from 'formik';
import GeneralSection from './Sections/GeneralSection/GeneralSection';
import DirectionsSection from './Sections/DirectionsSection/DirectionsSection';
import LaboralSection from './Sections/LaboralSection/LaboralSection';
import AdditionalSection from './Sections/AdditionalSection/AdditionalSection';
import ImagesSection from './Sections/ImagesSection/ImagesSection';
import tw from 'twrnc';
import { Text } from 'react-native';
import { getData, storeData } from '../../../../../utils/storage';
import { CUSTOMER_GENERAL_INFORMATION } from '../../../../../fields/CustomerFields';

const Tab = createBottomTabNavigator();

const GeneralDataPageNav = ({ credit }) => {
  const [initialValues, setInitialValues] = useState({
    id: "dfz",
    firstName: credit?.name,
    lastName: credit?.lastName,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Recuperar datos al montar el componente
    const fetchData = async () => {
      const storedData = await getData('client_information_' + credit?.hashId);
      console.log("Datos recuperados: ", storedData);

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

  // Define la función de envío que será compartida por todas las secciones
  const handleSubmit = async (values) => {
    console.log('Form values:', values);
    await storeData('client_information_' + credit?.hashId, JSON.stringify(values));
  };

  // Función para validar dinámicamente
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }

    if (!values?.lastName) {
      errors.lastName = 'Last name is required';
    }

    // Ejemplo de validación dinámica dependiendo de un campo
    if (values.id === "dfz" && !values.additionalField) {
      errors.additionalField = 'This field is required when ID is "dfz"';
    }

    CUSTOMER_GENERAL_INFORMATION.forEach((field) => {
      const value = values[field.name];
  
      // Validar si el campo es requerido
      if (field.required && !value) {
        errors[field.name] = `${field.label} is required`;
      }
  
      // Validar longitud mínima
      if (field.validationParams?.minLength && value?.length < field.validationParams.minLength) {
        errors[field.name] = `${field.label} must be at least ${field.validationParams.minLength} characters`;
      }
  
      // Validar longitud máxima
      if (field.validationParams?.maxLength && value?.length > field.validationParams.maxLength) {
        errors[field.name] = `${field.label} must be at most ${field.validationParams.maxLength} characters`;
      }
  
      // Validaciones adicionales dinámicas (ejemplo específico)
      if (values.id === "dfz" && field.name === "additionalField" && !value) {
        errors.additionalField = 'This field is required when ID is "dfz"';
      }
    });

    console.log("errorsGeneralDataPage: ", errors)
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarBadgeStyle: ``,
            tabBarStyle: tw`bg-white dark:bg-gray-700`,
          }}
        >
          <Tab.Screen
            name="general"
            options={{
              tabBarIcon: ({ focused, color, size }) => <Text style={tw``}>🏠</Text>,
              title: 'Home',
            }}
          >
            {(props) => (
              <GeneralSection
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                isLoading={isLoading}
                errors={errors} // Pasar los errores a la sección
                touched={touched} // Para mostrar los errores cuando el campo ha sido tocado
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="direction"
            options={{
              tabBarIcon: ({ focused, color, size }) => <Text style={tw``}>📍</Text>,
              title: 'Ubicacion',
            }}
          >
            {(props) => (
              <DirectionsSection
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                isLoading={isLoading}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="laboral"
            options={{
              tabBarIcon: ({ focused, color, size }) => <Text style={tw``}>🏢</Text>,
              title: 'Laboral',
            }}
          >
            {(props) => (
              <LaboralSection
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                isLoading={isLoading}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="additional">
            {(props) => (
              <AdditionalSection
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                isLoading={isLoading}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="imgs"
            options={{
              tabBarIcon: ({ focused, color, size }) => <Text style={tw``}>🖼️</Text>,
              title: 'Fotos',
            }}
          >
            {(props) => (
              <ImagesSection
                {...props}
                handleChange={handleChange}
                values={values}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </Formik>
  );
};

export default GeneralDataPageNav;
