import React from 'react';
import { View, Text, ScrollView, Button, ActivityIndicator } from 'react-native';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import { CUSTOMER_DIRECTION_INFORMATION } from '../../../../../../../fields/CustomerFields';

const DirectionsSection = ({ handleChange, handleSubmit, values, isLoading }) => {
  const [isMapModalVisible, setIsMapModalVisible] = React.useState(false);


  if (isLoading) {
    return (
      <View style={className('h-full p-4 bg-white dark:bg-gray-900')}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    )
  }

  return (
    <ScrollView style={className('h-full p-4 bg-white dark:bg-gray-900')}>
      <View>
        <View style={className('flex flex-row flex-wrap ')}>
          {CUSTOMER_DIRECTION_INFORMATION.slice(0, -3).map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
            />
          ))}
          <Button
            title="Seleccionar Ubicación en Mapa"
            onPress={() => setIsMapModalVisible(true)}
          />
          {CUSTOMER_DIRECTION_INFORMATION.slice(-3).map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
            />
          ))}

        </View>
        <Text>
          {JSON.stringify(values)}
        </Text>
      </View>
      {
        /**
         * <MapModal
        isVisible={isMapModalVisible}
        onClose={() => setIsMapModalVisible(false)}
        onSelectLocation={handleMapSelection}
      />
         */
      }

    </ScrollView>
  );
};

export default DirectionsSection;