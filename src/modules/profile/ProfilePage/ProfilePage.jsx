import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { className } from '../../../utils/className'

export default function ProfilePage() {

    const userProfileData = [
        {
            title: "Datos Generales",
            items: [
                { label: "Nombre", value: "Denis Federico Zelaya Zelaya" },
                { label: "Fecha de Nacimiento", value: "10 Junio 1993" },
                { label: "Profesión", value: "Ing. en Informática" },
                { label: "Correo Electronico", value: "Denisfzelaya@gmail.com" }
            ]
        },
        {
            title: "Datos Laborales",
            items: [
                { label: "Fecha de Inicio", value: "10 Julio 2019" },
                { label: "Roles", value: "Asesor, Administrador" },
                { label: "Agencias Asignadas", value: "Miraflores" },
                { label: "Tipo de Contrato", value: "Permanente" }
            ]
        }
    ];

    const ITEMS = [
        { type: "Title", name: "Configuracion" },
        { type: "Link", name: "Idioma", value: "languaje" },
        { type: "Link", name: "Modo Oscuro", value: "languaje" },
        { type: "Link", name: "Actualizar Contrasena", value: "languaje" },
        { type: "Link", name: "Editar Perfil", value: "languaje" },
        { type: "Title", name: "Ayuda y Asistencia" },
        { type: "Link", name: "Ayuda", value: "languaje" },
        { type: "Link", name: "Sugerencias", value: "languaje" },
        { type: "Link", name: "Informar un problema", value: "languaje" },
        { type: "Title", name: "Seguridad" },
        { type: "Link", name: "Mis Dispositivos", value: "languaje" },
        { type: "Link", name: "Mis Inicios de Sesion", value: "languaje" },
        { type: "Link", name: "Actividad Reciente", value: "languaje" },
    ]

    const InfoCard = ({ title, items }) => (
        <View style={className(`bg-white rounded-lg p-4 w-full mb-2 dark:bg-gray-800`)}>
            <Text style={className(`text-lg text-blue-700 font-bold mb-2`)}>{title}</Text>
            {items.map((item, index) => (
                <View key={index} style={className(`pb-2`)}>
                    <Text style={className(`text-black dark:text-gray-400`)}>{item.label}</Text>
                    <Text style={className(`text-gray-500`)}>{item.value}</Text>
                </View>
            ))}
        </View>
    );

    return (
        <ScrollView style={className('bg-slate-200 dark:bg-gray-900')}>
            <View style={className('flex flex-row flex-wrap')}>
                <View style={className('h-[50] bg-blue-500 w-full dark:bg-blue-900')} >
                    <Text>Hola</Text>
                </View>
                <View style={className('p-4 w-full')}>
                    {userProfileData.map((section, index) => {
                        return <InfoCard key={index} title={section.title} items={section.items} />
                    })}
                    {
                        ITEMS.map((item, index) => {
                            if (item.type === "Title") {
                                return (
                                    <View style={className('mb-2')} key={item.name}>
                                        <Text style={className('text-lg text-black dark:text-gray-300')}>{item.name}</Text>
                                    </View>
                                )
                            }

                            if (item.type === "Link") {
                                return (
                                    <View style={className('bg-white rounded-lg p-3 w-full mb-2 dark:bg-gray-800')} key={item.name}>
                                        <Text style={className('text-black dark:text-gray-400')}>{item.name}</Text>
                                    </View>
                                )
                            }

                            return (<View style={className('bg-white rounded-lg p-3 w-full mb-2')} key={item.name}>
                                <Text></Text>
                            </View>)
                        })
                    }
                </View>


            </View>


        </ScrollView>
    )
}