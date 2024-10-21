import { View, Text, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import GuaranteesListPage from '../modules/credits/CreditRequestManager/Pages/GuaranteesPage/GuaranteesListPage';
import { GuaranteesProvider } from './GuaranteesContext';
import GuaranteeFormsBottomNav from './GuaranteeFormsBottomNav';

const Stack = createNativeStackNavigator();

function GuaranteesStackNav({ credit }): JSX.Element {
    return (
        <GuaranteesProvider credit={credit}>
            <Stack.Navigator
                initialRouteName='HomeT'
                screenOptions={{
                    animation: "slide_from_right",
                    headerStyle: tw`bg-blue-500 dark:bg-blue-900`,
                    headerTintColor: `#fff`,
                }}>
                <Stack.Screen name="HomeT" >
                    {(props) => (
                        <GuaranteesListPage
                            {...props}
                            credit={credit}

                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="GuaranteeForm" >
                    {(props) => (
                        <GuaranteeFormsBottomNav
                            {...props}
                            credit={credit}
                        />
                    )}
                </Stack.Screen>



            </Stack.Navigator>
        </GuaranteesProvider>
    )
}

export default GuaranteesStackNav;