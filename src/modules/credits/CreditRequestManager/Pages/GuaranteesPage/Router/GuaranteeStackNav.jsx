import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GuaranteesListPage from '../GuaranteesListPage';


const Tab = createBottomTabNavigator();

const GuaranteeStackNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="home" component={GuaranteesListPage} />
    </Tab.Navigator>
  );
};

export default GuaranteeStackNav;