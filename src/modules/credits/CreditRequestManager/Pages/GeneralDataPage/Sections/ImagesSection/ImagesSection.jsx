import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { className } from '../../../../../../../utils/className'

export default function ImagesSection() {
  return (
    <ScrollView style={className('h-full p-4 bg-white dark:bg-gray-900')}>
      <View>
        <Text>Hola</Text>
      </View>
    </ScrollView>
  )
}