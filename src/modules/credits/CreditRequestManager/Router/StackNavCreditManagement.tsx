import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiskCenterDetailsPage from '../Pages/RiskCenterDetailsPage/RiskCenterDetailsPage';
import GeneralDataPage from '../Pages/GeneralDataPage/GeneralDataPageNav';
import RequestDetailsPage from '../Pages/RequestDetailsPage/RequestDetailsPage';
import PersonalReferencesPage from '../Pages/PersonalReferencesPage/PersonalReferencesPage';
import BusinessPhotosPage from '../Pages/BusinessPhotosPage/BusinessPhotosPage';
import CreditManagement from '../Pages/CreditManagement/CreditManagement';
import tw from 'twrnc';
import FinantialEvaluationButtonNav from '../Pages/FinancialEvaluationPage/FinantialEvaluationButtonNav';
import GuaranteesStackNav from '../../../../navigations/GuaranteesStackNav';


const Stack = createNativeStackNavigator();

function StackNavCreditManagement({ route }): JSX.Element {
    const { credit } = route?.params; // Obtén el parámetro credit

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                animation: "slide_from_right",
                headerStyle: tw`bg-blue-500 dark:bg-blue-900`,
                headerTintColor: `#fff`,
            }}>
            <Stack.Screen


                name="Home" >
                {(props) => (
                    <CreditManagement
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="RiskCenterDetails" component={RiskCenterDetailsPage} />
            <Stack.Screen name="GeneralData"  >
                {(props) => (
                    <GeneralDataPage
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="RequestDetails">
                {(props) => (
                    <RequestDetailsPage
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="AddGuarantee"  >
                {(props) => (
                    <GuaranteesStackNav
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="FinancialEvaluation">
                {(props) => (
                    <FinantialEvaluationButtonNav
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="AddReference"  >
                {(props) => (
                    <PersonalReferencesPage
                        {...props}
                        credit={credit}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="BusinessPhotos">
                {(props) => (
                    <BusinessPhotosPage
                        {...props}
                        credit={credit}
                    />
                )}

            </Stack.Screen>
        </Stack.Navigator>
    )
}

function Home({ navigation }): JSX.Element {
    return (
        <ScrollView>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Go to Notifications' onPress={() => navigation.navigate('Notifications')} />
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
            <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
        </ScrollView>
    )
}

export default StackNavCreditManagement;