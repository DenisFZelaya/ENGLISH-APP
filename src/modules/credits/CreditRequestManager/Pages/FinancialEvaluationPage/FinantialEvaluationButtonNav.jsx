import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import FinancialEvaluationPage from './FinancialEvaluationPage';
import FinancialEvaluationSection2 from './FinancialEvaluationSection2';
import { Formik, useFormikContext } from 'formik';
import { getData, storeData } from '../../../../../utils/storage';
import { ActivityIndicator, Text, View } from 'react-native';
import { FINANCIAL_SIT_FINAN } from './FinancialEvaluationFields';
import { className } from '../../../../../utils/className';

const TabFinEv = createBottomTabNavigator();

// Componente para manejar la actualización automática de totalMensual
const AutoUpdateTotalMensual = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const ventasRegular = parseFloat(values.ventasRegular) || 0;
    const ventasBaja = parseFloat(values.ventasBaja) || 0;
    const totalMensual = ventasRegular + ventasBaja;
    setFieldValue('totalMensual', totalMensual.toFixed(2));
  }, [values.ventasRegular, values.ventasBaja]);

  return null;
};

const FinantialEvaluationButtonNav = ({ credit }) => {
  const [initialValues, setInitialValues] = useState({
    creditHashId: credit?.hashId,
    ventasRegular: '0',
    ventasBaja: '0',
    totalMensual: '0',
  });

  const calculateFieldValue = (calculation, values) => {
    if (!calculation) return null;

    switch (calculation.type) {
      case 'sum':
        return calculation.fields.reduce((sum, field) => sum + (parseFloat(values[field]) || 0), 0);
      // Puedes agregar más tipos de cálculos aquí
      default:
        return null;
    }
  };

  const AutoUpdateCalculatedFields = ({ fields }) => {
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
      console.log("invoke AutoUpdateCalculatedFields")
      fields.forEach(field => {
        if (field.calculation) {
          const calculatedValue = calculateFieldValue(field.calculation, values);
          setFieldValue(field.name, calculatedValue.toFixed(2));
        }
      });
    }, [values, fields]);

    return null;
  };


  const [isLoading, setIsLoading] = useState(true);

  const storageKey = "finantial_evaluation_" + credit?.hashId;

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getData(storageKey);
      console.log("Datos recuperados: ", storedData);

      if (storedData) {
        setInitialValues((prevValues) => ({
          ...prevValues,
          ...JSON.parse(storedData)
        }));
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    console.log('Form values:', values);
    await storeData(storageKey, JSON.stringify(values));
  };

  if (isLoading) {
    return (
      <View style={className('h-full p-4 bg-white flex items-center dark:bg-gray-900')}>
        <ActivityIndicator size="large" color="#1E90FF" />
        <Text style={className('dark:bg-white')}>Cargando...</Text>
      </View>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values, touched }) => (
        <>
          <AutoUpdateCalculatedFields fields={FINANCIAL_SIT_FINAN} />
          <TabFinEv.Navigator
            screenOptions={{
              headerShown: false,
              tabBarBadgeStyle: ``,
              tabBarStyle: tw`bg-white dark:bg-gray-700`
            }}>
            <TabFinEv.Screen name="sit_finan">
              {(props) => (
                <FinancialEvaluationPage
                  {...props}
                  credit={credit}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  values={values}
                />
              )}
            </TabFinEv.Screen>
            <TabFinEv.Screen name="patrimonio">
              {(props) => (
                <FinancialEvaluationSection2
                  {...props}
                  credit={credit}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  values={values}
                />
              )}
            </TabFinEv.Screen>
          </TabFinEv.Navigator>
        </>
      )}
    </Formik>
  );
};

export default FinantialEvaluationButtonNav;