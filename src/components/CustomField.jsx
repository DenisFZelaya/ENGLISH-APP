import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomDropdown from './CustomDropdown';
import CustomDropdownSearch from './CustomDropdownSearch';
import { className } from '../utils/className';
import PhotoCard from './PhotoCard';
import ErrorBoundary from './ErrorBoundary';

export default function CustomField({ field, handleChange, values, columns = 1, errors = {}, touched = {}, handleSubmit }) {

  const getWidthClass = () => {
    try {
      switch (field?.columns) {
        case 1: return 'w-1/4 pl-1 pr-1';
        case 2: return 'w-2/4 pl-1 pr-1';
        case 3: return 'w-3/4 pl-1 pr-1';
        case 4: return 'w-full pl-1 pr-1';
        default: return 'w-full pl-1 pr-1';
      }
    } catch (error) {
      console.error("handleTextChange: ", error)
      return 'w-full pl-1 pr-1';
    }
  };

  const widthClass = getWidthClass();

  const handleTextChange = (text) => {
    try {
      // Elimina cualquier signo negativo y convierte a número
      const numericValue = text?.replace('-', '');

      // Si el campo es numérico, asegúrate de que sea un número positivo
      if (field?.customProps?.keyboardType === 'numeric' ||
        field?.customProps?.keyboardType === 'number-pad') {
        const number = parseFloat(numericValue);
        if (!isNaN(number) && number >= 0) {
          handleChange(field?.name)(numericValue);
        }
      } else {
        // Para campos no numéricos, simplemente actualiza el valor
        handleChange(field?.name)(text);
      }
    } catch (error) {
      console.error("handleTextChange: ", error)
    }
  };
  const backgroundColor = errors?.[field.name] && touched?.[field.name]
    ? 'bg-red-100 dark:bg-red-900'  // Color de fondo si hay error y el campo fue tocado
    : 'bg-purple-50 dark:bg-gray-700';  // Color normal si no hay error

  return (
    <ErrorBoundary>
      <View style={className(`mb-2 ${widthClass}`)}>
        {field?.component === "Switch" && <Text></Text>}
        {!["Switch", "Title"]?.includes(field?.component) &&
          <Text style={className('mb-0 dark:text-white')}>
            {field?.label} {field?.required && "*"}
          </Text>}

        {field?.component === 'TextField' && (
          <ErrorBoundary>
            <TextInput
              style={className(`${backgroundColor} p-2 rounded dark:text-white`)}
              onChangeText={handleTextChange}
              value={values?.[field?.name] || ""}
              {...field?.customProps}
            />
          </ErrorBoundary>
        )}
        {field.component === 'CustomDropdown' && (
          <ErrorBoundary>
            <CustomDropdown
              options={field.options}
              title={field?.label}
              selectedValue={values[field.name]}
              onValueChange={handleChange(field.name)}
              field={field}
            />
          </ErrorBoundary>

        )}
        {field?.component === 'CustomDropdownSearch' && (
          <ErrorBoundary>
            <CustomDropdownSearch
              title={field?.label}
              options={field.options}
              selectedValue={values[field.name]}
              onValueChange={handleChange(field.name)}
              field={field}
            />
          </ErrorBoundary>

        )}

        {field?.component === 'Date' && (
          <TextInput
            style={className('bg-purple-50 p-2 rounded dark:bg-gray-700 text-white')}
            onChangeText={handleChange(field.name)}
            value={values[field.name]}
          />
        )}

        {field?.component === 'Switch' && (
          <ErrorBoundary>
            <View style={className('bg-purple-50 flex flex-row justify-between items-center p-2 rounded dark:bg-gray-700')}>
              <Text>{field.label}</Text>
              <Switch
                onValueChange={(value) => {
                  console.log("Value switch: ", value);
                  handleChange(field.name)(value);
                }}
                //value={values[field.name] || false}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={values[field.name] ? "#f5dd4b" : "#f4f3f4"}
              //value={Boolean(values[field.name]) || false }
              />
            </View>
          </ErrorBoundary>
        )}

        {field?.component === 'Title' && (
          <View>
            <Text style={className('text-lg text-blue-600 font-bold dark:text-blue-500')}>{field?.label}</Text>
            {
              field?.subLabel && (
                <Text style={className('text-sm')}>{field?.subLabel}</Text>
              )
            }

            {
              field?.showHr != false &&
              <View style={className('w-full bg-gray-300 rounded-md')} >
                <Text style={{ height: 1 }}></Text>
              </View>
            }

          </View>
        )}

        {field?.component === 'PhotoCard' && (
          <PhotoCard
            field={field}
            handleChange={handleChange}
            values={values}
          />
        )}

        {field?.component === 'Submit' && (
          <ErrorBoundary>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={className('bg-green-500 p-3 rounded-lg')}>
                <Text style={className('text-white font-bold text-center')}>{field?.title}</Text>
              </View>
            </TouchableOpacity>
          </ErrorBoundary>
        )}

        {/** MOSTRAR EL ERROR */}
        {
          errors?.[field.name] && touched?.[field.name] && <View>
            <ErrorBoundary>

              {errors?.[field.name] && touched?.[field.name] &&
                <Text style={className(`text-red-500`)}>{errors?.[field.name]}</Text>}
            </ErrorBoundary>
          </View>
        }

      </View>
    </ErrorBoundary>

  );
}
