import { View, Text, StyleSheet, ScrollView, Button, TouchableHighlight, TouchableOpacity, Image, useColorScheme } from 'react-native';
import React from 'react';
import { className } from '../../../../../utils/className';

export default function CreditManagement({ navigation, credit }) {
  const colorScheme = useColorScheme(); // Esto devolverá 'dark' o 'light'

  const theme = colorScheme

  return (
    <ScrollView style={className('h-full bg-gray-100 p-4 dark:bg-gray-900')}>
      <Text
        style={className('text-2xl font-bold text-center mb-4 text-blue-600')}>
        Gestión de Crédito
      </Text>
      <View style={className(' bg-white border border-blue-100 mb-2 rounded-lg p-3 dark:border-0 dark:bg-gray-700 dark:text-white')}>
        <Text style={className('text-lg font-semibold mb-2 dark:text-white')}>
          {credit?.name} {credit?.lastName}
        </Text>
        <Text style={className(' mb-2 dark:text-white')}>
          {credit?.identificacion}
        </Text>
        <Text style={className('mb-2 dark:text-white')}>
          {credit?.createdAt}
        </Text>
        <Text style={className('font-semibold mb-2 dark:text-white')}>
          {credit?.state}
        </Text>
      </View>

      {/* Card de Información de Centrales de Riesgo */}
      <View style={className('bg-white p-2 mb-2 rounded-lg dark:bg-gray-700')} >
        <Text style={className('text-lg font-semibold mb-2')}>
          Risk Center Information
        </Text>
      </View>

      <View style={className('flex flex-wrap flex-row items-center')}>

        {/* Datos Generales */}

        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('GeneralData')}>
            <View style={className('bg-indigo-200 p-2 mb-2 rounded-lg mr-2 items-center dark:bg-opacity-30')}>

              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/2503/2503707.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Datos Generales
                </Text>
              </View>

            </View>
          </TouchableOpacity>
        </View>


        {/* Solicitud */}
        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('RequestDetails')}>
            <View style={className('bg-green-200 p-2 mb-2 rounded-lg mr-2 items-center dark:bg-opacity-30')}>

              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/6008/6008154.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Solicitud
                </Text>
              </View>

            </View>
          </TouchableOpacity>
        </View>

        {/* Avales Garantías */}
        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('AddGuarantee')}>
            <View style={className('bg-yellow-200 p-2 mb-2 rounded-lg mr-2 dark:bg-opacity-30')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/4514/4514936.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Garantias
                </Text>
                <View style={className('flex flex-wrap flex-row')}>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-gray-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>


        {/* Referencias */}
        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('AddReference')}>
            <View style={className('bg-blue-200 p-2 mb-2 rounded-lg mr-2 dark:bg-opacity-30')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/7612/7612959.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Referencias Personales
                </Text>
                <View style={className('flex flex-wrap flex-row')}>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-gray-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>


        {/* Evaluación Financiera */}
        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('FinancialEvaluation')}>
            <View style={className('bg-pink-200 p-2 mb-2 rounded-lg mr-2 dark:bg-opacity-30')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/6020/6020452.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Evaluacion Financiera
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>


        {/* Fotos del Negocio */}
        <View style={className('w-1/2')}>
          <TouchableOpacity onPress={() => navigation.navigate('BusinessPhotos')}>
            <View style={className('bg-purple-200 p-2 mb-2 rounded-lg mr-2 dark:bg-opacity-30')}>

              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://freeiconshop.com/wp-content/uploads/edd/image-flat.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Fotos del Negocio
                </Text>
              </View>

            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
