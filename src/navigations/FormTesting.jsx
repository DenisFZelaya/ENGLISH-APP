import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { className } from '../utils/className';
import CustomField from '../components/CustomField';
import { FIELDS } from './FormField';

const validateForm = (values, FIELDS_FORM = []) => {
    console.log("validateForm INVOKE")
    let errors = {};

    FIELDS_FORM.forEach((field) => {
        const value = values[field.name];

        // 
        if (field?.required && (value === undefined || value === null || value === '')) {
            errors[field.name] = 'Este campo es requerido';
        }


        // Validar si no esta vacio
        if (field.validate?.required && !value) {
            errors[field.name] = 'Este campo es requerido';
        }

        // Validación numérica
        if (field.validate?.numeric && isNaN(value)) {
            errors[field.name] = 'Debe ser un número válido';
        }

        // Validación de rango
        const numValue = parseFloat(value);
        if (field.validate?.min && numValue < field.validate.min) {
            errors[field.name] = `Debe ser mayor o igual a ${field.validate.min}`;
        }
        if (field.validate?.max && numValue > field.validate.max) {
            errors[field.name] = `Debe ser menor o igual a ${field.validate.max}`;
        }

        // Validación de igualdad de campos
        if (field.validate?.match && value !== values[field.validate.match]) {
            errors[field.name] = field.validate.message || 'Los valores no coinciden';
        }

        // Validación de tipo de archivo
        if (field.validate?.fileType) {
            const fileType = value?.name?.split('.').pop();
            if (!field.validate.fileType.includes(fileType)) {
                errors[field.name] = field.validate.message || 'Tipo de archivo no permitido';
            }
        }

        // Validación de required condicional
        if (field.validate?.conditionalRequired) {
            const { field: conditionalField, value: requiredValue, message } = field.validate.conditionalRequired;
            if (values[conditionalField] === requiredValue && !value) {
                errors[field.name] = message || 'Este campo es requerido';
            }
        }

        // Validación de formato de fecha
        if (field.validate?.dateFormat) {
            const { pattern, message, regex } = field.validate.dateFormat;

            // Convertir la cadena de regex del JSON a un objeto RegExp
            let regexObj;
            try {
                // Extraer el patrón de regex de la cadena (quitando las barras al inicio y al final)
                const regexPattern = regex.replace(/^\/|\/$/g, '');
                regexObj = new RegExp(regexPattern);
            } catch (e) {
                console.error(`Error al crear RegExp para el campo ${field.name}:`, e);
                // Si hay un error al crear la RegExp, usa una por defecto
                regexObj = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            }
            if (!regexObj.test(value)) {
                errors[field.name] = message || `La fecha debe tener el formato ${pattern}`;
            }
        }

        // Validación de formato de teléfono
        if (field.validate?.phoneFormat) {
            const { pattern, message, regex } = field.validate.phoneFormat;

            // Convertir la cadena de regex del JSON a un objeto RegExp
            let regexObj;
            try {
                // Extraer el patrón de regex de la cadena (quitando las barras al inicio y al final)
                const regexPattern = regex.replace(/^\/|\/$/g, '');
                regexObj = new RegExp(regexPattern);
            } catch (e) {
                console.error(`Error al crear RegExp para el campo ${field.name}:`, e);
                // Si hay un error al crear la RegExp, usa una por defecto
                regexObj = /^\+?[\d\s-]{10,15}$/;
            }

            if (!regexObj.test(value)) {
                errors[field.name] = message || `El número de teléfono debe tener el formato ${pattern}`;
            }
        }

        // Aquí puedes agregar más validaciones según sea necesario
    });

    console.log("errors")

    return errors;
};

export default function FormTesting() {
    return (
        <Formik
            initialValues={{}}
            validate={(values) => validateForm(values, FIELDS)}
            onSubmit={values => {
                console.log("ONSUBMIT: ", values);
                // Aquí puedes manejar el envío de datos
            }}>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <ScrollView style={className('p-4 bg-white dark:bg-gray-900')}>
                    <View style={className('flex flex-row flex-wrap')}>
                        {FIELDS.map((field, index) => {

                            // Determinar si el campo debe ser habilitado
                            let isEnabled = true;
                            let shouldRender = true;

                            if (field?.conditionalRender) {
                                const { field: conditionalField, value: conditionalValue } = field.conditionalRender;
                                isEnabled = values[conditionalField] === conditionalValue;
                                console.log(`Campo: ${field.name}, Condición: ${conditionalField} === ${conditionalValue}, Valor actual: ${values[conditionalField]}, Habilitado: ${isEnabled}`);
                            }

                            // Manejo de conditionalRenderNoVoid
                            if (field.conditionalRenderNoVoid) {
                                const { field: conditionalField } = field.conditionalRenderNoVoid;
                                shouldRender = values[conditionalField] && values[conditionalField].trim() !== '';
                                console.log(`Campo: ${field.name}, Condición: ${conditionalField} no vacío, Valor actual: ${values[conditionalField]}, Mostrar: ${shouldRender}`);
                            }

                            if (!isEnabled) return null;
                            if (!shouldRender) return null;



                            return (
                                <CustomField
                                    field={field}
                                    handleChange={handleChange}
                                    values={values}
                                    key={index}
                                    errors={errors}
                                    touched={touched}
                                    handleSubmit={handleSubmit}
                                />
                            );
                        })}
                    </View>

                    <Text>
                        Errors: {JSON.stringify(errors)}
                    </Text>
                    <Text>
                        Values:  {JSON.stringify(values)}
                    </Text>
                </ScrollView>
            )}
        </Formik>
    )
}