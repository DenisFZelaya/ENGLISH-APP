import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import tw from 'twrnc';
import GuaranteeResumeSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteeResumeSection';
import GuaranteeCRSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteeCRSection';
import GuaranteePNaturalSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteePNaturalSection';
import GuaranteeLocationSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteeLocationSection';
import GuaranteePhotosSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteePhotosSection';
import { useGuarantees } from './GuaranteesContext';
import GuaranteePrendaryGeneralSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteePrendaryGeneralSection';
import GuaranteePrendaryAvaluoSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteePrendaryAvaluoSection';
import GuaranteeHipotecaryGeneralSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteeHipotecaryGeneralSection';
import { storeData } from '../utils/storage';
import { Formik } from 'formik';
import GuaranteePrendaryDetailSection from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/Sections/GuaranteePrendaryDetailSection';

const Tab = createBottomTabNavigator();

const GuaranteeFormsBottomNav = ({ credit }) => {
  const { selected, handleSubmit: handleSubmitHook } = useGuarantees()


  // Define la función de envío que será compartida por todas las secciones
  const handleSubmit = async (values) => {
    console.log('handleSubmit:', values);
    handleSubmitHook(values)
    // await storeData('client_information_' + credit?.hashId, JSON.stringify(values));
  };


  // 1 - Fiduciaria
  // 2 - Prendaria
  // 3 - Hipotecaria
  // 4 - Otras

  return (
    <Formik
      initialValues={selected || {}}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    //validate={validate}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarBadgeStyle: ``,
            tabBarStyle: tw`bg-white dark:bg-gray-700`
          }}>
          {
            // PRENDARIA - RESUMEN
            ["2"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="resume" >
                {(props) => (
                  <GuaranteePrendaryGeneralSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }
          {
            // PRENDARIA - RESUMEN
            ["2"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="prendary_general" >
                {(props) => (
                  <GuaranteePrendaryDetailSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            // FIDUCIRIA - RESUMEN
            ["1"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="resume">
                {(props) => (
                  <GuaranteeResumeSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }



          {
            // FIDUCIRIA - RESUMEN
            ["3"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="resume"
              >
                {(props) => (
                  <GuaranteeHipotecaryGeneralSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            ["1"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="central"
              >
                {(props) => (
                  <GuaranteeCRSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            // FIDUCIRIA - RESUMEN
            ["1"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="pnatural"
              >
                {(props) => (
                  <GuaranteePNaturalSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            ["1", "2", "3"].includes(selected?.guaranteeType) && (
              <Tab.Screen name="location"
              >
                {(props) => (
                  <GuaranteeLocationSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            // PRENDARIA, HIPO - AVALUO
            ["2", "3"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="avaluo" >
                {(props) => (
                  <GuaranteePrendaryAvaluoSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

          {
            ["1", "2", "3"].includes(selected?.guaranteeType) && (
              <Tab.Screen
                name="photos" >
                {(props) => (
                  <GuaranteePhotosSection
                    {...props}
                    credit={credit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                )}
              </Tab.Screen>
            )
          }

        </Tab.Navigator>
      )}
    </Formik>

  );
};

export default GuaranteeFormsBottomNav;