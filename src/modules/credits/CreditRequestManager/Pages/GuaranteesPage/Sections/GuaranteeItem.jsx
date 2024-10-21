import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { className } from '../../../../../../utils/className'
import ErrorBoundary from '../../../../../../components/ErrorBoundary'
import CATALGOS from "../../../../../../constants/CATALOGS.json"
import { useGuarantees } from '../../../../../../navigations/GuaranteesContext'

export default function GuaranteeItem({ item, onGo, onEdit, onDelete }) {
    
    return (
        <ErrorBoundary>
            <View style={className("bg-white p-6 mb-4 rounded-lg shadow-xl dark:bg-gray-800")}>

                {/* Encabezado */}
                <Text style={className("font-bold text-xl text-gray-900 dark:text-gray-100 mb-4")}>
                    {CATALGOS.guaranteeTypes.find(c => c.value === item?.guaranteeType).name}
                </Text>

                {/* Contenedor de información en dos columnas */}
                <View style={className("flex-row justify-between mb-4")}>
                    <View style={className("flex-1 pr-2")}>
                        <Text style={className("text-gray-700 dark:text-gray-300")}>Cobertura:</Text>
                        <Text style={className("font-semibold text-blue-600 dark:text-blue-400")}>{item?.coverage}%</Text>
                    </View>
                    <View style={className("flex-1 pl-2")}>
                        <Text style={className("text-gray-700 dark:text-gray-300")}>Sueldo/Avalúo:</Text>
                        <Text style={className("font-semibold text-green-500")}>L. {item?.salaryAvaluation?.toLocaleString()}</Text>
                    </View>
                </View>

                <View style={className("flex-row justify-between mb-4")}>
                    <View style={className("flex-1 pr-2")}>
                        <Text style={className("text-gray-700 dark:text-gray-300")}>Tipo de Obligación:</Text>
                        <Text style={className("font-semibold text-gray-700 dark:text-gray-300")}> {CATALGOS.obligationTypes.find(c => c.value === item?.obligationType)?.name}</Text>
                    </View>
                    {item?.guaranteesNav === 'Fiduciaria' && (
                        <View style={className("flex-1 pl-2")}>
                            <Text style={className("text-gray-700 dark:text-gray-300")}>No. Identificación:</Text>
                            <Text style={className("font-semibold text-gray-700 dark:text-gray-300")}>{item?.avalIdentification}</Text>
                        </View>
                    )}
                </View>

                {/* Botones de acción */}
                <View style={className("flex-row justify-around mt-1")}>
                    <TouchableOpacity
                        style={className("bg-blue-500 px-6 py-2 rounded-xl")}
                        onPress={() => onGo(item)}
                    >
                        <Text style={className("text-white font-bold")}>Ir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={className("bg-yellow-500 px-6 py-2 rounded-xl")}
                        onPress={() => onEdit(item)}
                    >
                        <Text style={className("text-white font-bold")}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={className("bg-red-500 px-6 py-2 rounded-xl")}
                        onPress={() => onDelete(item)}
                    >
                        <Text style={className("text-white font-bold")}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ErrorBoundary>

    )
}

;