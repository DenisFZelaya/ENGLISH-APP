import CATALOGS from '../constants/CATALOGS.json'

export const GUARANTE_RESUME_FIEDS = [
    {
        label: "Tipo de Persona",
        name: "personType",
        component: "CustomDropdown",
        placeholder: "Tipo de Persona",
        options: CATALOGS.personType,
    },
    {
        label: "Nombre",
        name: "name",
        component: "TextField",
        placeholder: "Nombre del cliente"
    },
    {
        label: "No. de Cliente",
        name: "avalIdentification",
        component: "TextField",
        placeholder: "Número de cliente",
        customProps: {
            editable: false,
        }
    },
    {
        component: "Submit",
        title: "Guardar"
    }

]

export const GUARANTE_CR_FIEDS = [
    {
        label: "Consultar Central de Riesgo",
        name: "consultarCentralRiesgo",
        component: "Button",
        customProps: {
            "title": "Consultar Central de Riesgo"
        }
    },
    {
        label: "Nombre completo",
        name: "fullName",
        component: "TextField",
        placeholder: "Nombre completo"
    },
    {
        label: "No. Identidad",
        name: "",
        component: "TextField",
        placeholder: "Número de identidad"
    },
    {
        label: "Fecha de Nacimiento",
        name: "birthDate",
        component: "Date",
        placeholder: "Fecha de nacimiento"
    },
    {
        label: "Dirección",
        name: "address",
        component: "TextField",
        placeholder: "Dirección completa",
        customProps: {
            "multiline": true,
            "numberOfLines": 3
        }
    },
    {
        label: "Fecha de consulta",
        name: "fechaConsulta",
        component: "Date",
        placeholder: "Fecha de consulta"
    },
    {
        label: "Calificación de riesgo",
        name: "riskCalification",
        component: "Card",
        customProps: {
            "title": "Calificación de riesgo"
        }
    },
    {
        label: "Ver PDFs",
        name: "verPDFs",
        component: "Button",
        customProps: {
            "title": "Ver PDFs"
        }
    },
    {
        component: "Submit",
        title: "Guardar"
    }
]

export const GUARANTE_NATURAL_PERSON_FIEDS = [
    {
        label: "Tipo de Identificación",
        name: "identificationType",
        component: "CustomDropdown",
        options: CATALOGS.identificationType,
    },
    {
        label: "No. de Identificación",
        name: "identification",
        component: "TextField",
        placeholder: "Número de identificación"
    },
    {
        label: "Fecha de Nacimiento",
        name: "birthDate",
        component: "Date",
        placeholder: "Fecha de nacimiento",
        columns: 2,
    },
    {
        label: "Edad",
        name: "age",
        component: "TextField",
        placeholder: "Edad",
        columns: 2,
        customProps: {
            "editable": false
        }
    },
    {
        label: "RTN",
        name: "rtn",
        component: "TextField",
        placeholder: "RTN (Opcional)"
    },
    {
        label: "Nacionalidad",
        name: "country",
        component: "CustomDropdownSearch",
        options: CATALOGS.countries,
        columns: 2,
    },
    {
        label: "Emitida en",
        name: "lugarEmision",
        component: "TextField",
        columns: 2,
        placeholder: "Lugar de emisión"
    },
    {
        label: "Departamento Nacimiento",
        name: "departamentoNacimiento",
        component: "CustomDropdownSearch",
        columns: 2,
        options: CATALOGS.departaments
    },
    {
        label: "Ciudad Nacimiento",
        name: "ciudadNacimiento",
        columns: 2,
        component: "CustomDropdownSearch",
        options: CATALOGS.cities
    },
    {
        label: "Lugar Poblado Nacimiento",
        name: "lugarPobladoNacimiento",
        component: "TextField",
        placeholder: "Lugar poblado de nacimiento"
    },
    {
        label: "Género",
        name: "genero",
        component: "CustomDropdown",
        options: CATALOGS.genders,
        columns: 2,
    },
    {
        label: "Estado Civil",
        name: "civi",
        component: "CustomDropdown",
        options: CATALOGS.civilStatus,
        columns: 2,
    },
    {
        label: "Relación",
        name: "relation",
        component: "TextField",
        placeholder: "Relación"
    },
    {
        label: "Generador de Divisas",
        name: "tipoGeneradorDivisas",
        component: "CustomDropdown",
        columns: 2,
        options: CATALOGS.currencies
    },
    {
        label: "Sector Económico",
        name: "economicSector",
        component: "CustomDropdownSearch",
        columns: 2,
        options: CATALOGS.economicSectors
    },
    {
        label: "Profesión, Ocupación u Oficio",
        name: "profesionOcupation",
        component: "CustomDropdownSearch",
        options: CATALOGS.ocupations
    },
    {
        label: "Ingreso",
        name: "ingreso",
        component: "TextField",
        placeholder: "Ingreso",
        customProps: {
            keyboardType: "numeric"
        }
    },
    {
        label: "Especificar fuente de ingresos",
        name: "sourceIngresos",
        component: "TextField",
        placeholder: "Fuente de ingresos"
    },
    {
        label: "Datos Laborales",
        name: "datosLaborales",
        component: "Title"
    },
    {
        label: "Giro o Actividad Desempeñada",
        name: "giroActividad",
        component: "TextField",
        placeholder: "Giro o actividad desempeñada"
    },
    {
        label: "Tenencia Negocio",
        name: "tenenciaNegocio",
        component: "CustomDropdown",
        options: CATALOGS.typePersonalReferences
    },
    {
        label: "Información del Cónyuge",
        name: "informacionConyugue",
        component: "Title"
    },
    {
        component: "Submit",
        title: "Guardar"
    }
]

export const GUARANTE_LOCATION_FIEDS = [
    {
        label: "Dirección de Domicilio Actual",
        name: "departament",
        component: "Title",
    },
    {
        label: "Departamento",
        name: "departament",
        component: "CustomDropdownSearch",
        options: CATALOGS.departaments,
        columns: 2,
    },
    {
        label: "Ciudad/Municipio",
        name: "city",
        component: "CustomDropdownSearch",
        options: CATALOGS.cities,
        columns: 2,
    },
    {
        label: "Col. Bo/Col",
        name: "coloniaBarrio",
        component: "CustomDropdownSearch",
        options: CATALOGS.departaments,
        columns: 2,
    },
    {
        label: "Dirección completa",
        name: "fullAddress",
        component: "TextField",
        placeholder: "Dirección completa (Ciudad, Estado, Cod. Postal, Barrio Col, Calle, etc.)",
        customProps: {
            multiline: true,
            numberOfLines: 3
        }
    },
    {
        label: "Contacto",
        subLabel: "Telefonos de contacto",
        component: "Title",
    },
    {
        label: "Teléfono",
        name: "phone",
        component: "TextField",
        columns: 2,
        placeholder: "Teléfono",
        customProps: {
            keyboardType: "phone-pad"
        }
    },
    {
        label: "Teléfono Móvil",
        name: "mobilePhone",
        component: "TextField",
        columns: 2,
        placeholder: "Teléfono Móvil",
        customProps: {
            keyboardType: "phone-pad"
        }
    },
    {
        label: "Correo Electronico",
        name: "email",
        component: "TextField",
        columns: 2,
        placeholder: "Correo Electronico",
    },
    {
        title: "Guardar",
        component: "Submit",
    }
]

export const GUARANTE_PHOTOS_FIEDS = [
    {
        label: "Foto 1",
        name: "foto1",
        component: "PhotoCard",
        customProps: {
            "description": true,
            "takePhoto": true,
            "selectFromGallery": true,
            "delete": true
        }
    },
    {
        label: "Foto 2",
        name: "foto2",
        component: "PhotoCard",
        customProps: {
            "description": true,
            "takePhoto": true,
            "selectFromGallery": true,
            "delete": true
        }
    },
    {
        label: "Foto 3",
        name: "foto3",
        component: "PhotoCard",
        customProps: {
            "description": true,
            "takePhoto": true,
            "selectFromGallery": true,
            "delete": true
        }
    },
]

export const GUARANTEE_RESUME_FIELDS = [
    {
        label: "Generales",
        component: "Title",
    },
    {
        label: "Id Registro",
        name: "id",
        component: "TextField",
        placeholder: "Ingrese el ID de registro",
        
        customProps: {
            editable: false,
        },
    },
    {
        label: "Sueldo/Avaluo",
        name: "salaryAvaluation",
        component: "TextField",
        placeholder: "Ingrese el ID de registro",
        columns: 2,
        customProps: {
            editable: false,
        },
    },
    {
        label: "Tipo de Garantía",
        name: "guaranteeType",
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo de bien",
        columns: 2,
        options: CATALOGS.guaranteeTypes,
        customProps: {
            editable: false,
        },
    },
    {
        label: "Tipo de Obligación",
        name: "obligationType",
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo de bien",
        columns: 2,
        options: CATALOGS.obligationTypes,
        customProps: {
            editable: false,
        },
    },
    {
        label: "Covertura (%)",
        name: "coverage",
        component: "TextField",
        placeholder: "Ingrese el ID de registro",
        columns: 2,
        customProps: {
            editable: false,
        },
    },
    {
        label: "",
        component: "Title",
    },
]

export const GUARANTEE_PRENDARY_GENERAL_FIELDS = [

    {
        label: "Tipo de Bien",
        name: "tipoBien",
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo de bien",
        columns: 2,
        options: [] // Aquí deberías incluir las opciones para el tipo de bien
    },

    {
        label: "Descripción del bien",
        name: "descripcionBien",
        component: "TextField",
        placeholder: "Describa el bien",
        customProps: {
            multiline: true,
            numberOfLines: 3
        }
    },
    {
        label: "Tipo de garantía mobiliaria",
        name: "tipoGarantiaMobiliaria",
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo de garantía mobiliaria",
        columns: 2,
        options: [] // Aquí deberías incluir las opciones para el tipo de garantía mobiliaria
    },
    {
        label: "Clasificación de garantía",
        name: "clasificacionGarantia",
        component: "CustomDropdown",
        placeholder: "Seleccione la clasificación de garantía",
        columns: 2,
        options: [] // Aquí deberías incluir las opciones para la clasificación de garantía
    },
    {
        label: "Comentarios",
        name: "comments",
        component: "TextField",
        placeholder: "Comentarios (Opcional)",
        customProps: {
            multiline: true,
            numberOfLines: 3
        }
    },
    {
        title: "Guardar",
        component: "Submit",
    }

]

export const GUARANTEE_PRENDARY_DETAILS_FIELDS = [
    {
        label: "Informacion de la Garantia",
        component: "Title",
    },
    {
        label: "Vin. No.",
        name: "vinNo",
        component: "TextField",
        placeholder: "Ingrese el número VIN",
        columns: 2,
    },
    {
        label: "Marca",
        name: "marca",
        component: "CustomDropdownSearch",
        placeholder: "Seleccione la marca",
        columns: 2,
        options: [] // Aquí deberías incluir las opciones para las marcas
    },
    {
        label: "Modelo",
        name: "model",
        columns: 2,
        component: "CustomDropdownSearch",
        placeholder: "Seleccione el modelo",
        options: [] // Aquí deberías incluir las opciones para los modelos
    },
    {
        label: "Año",
        name: "year",
        columns: 2,
        component: "TextField",
        placeholder: "Ingrese el año",
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: "Color",
        name: "color",
        columns: 2,
        component: "CustomDropdown",
        placeholder: "Seleccione el color",
        options: [] // Aquí deberías incluir las opciones para los colores
    },
    {
        label: "Tipo",
        name: "type",
        columns: 2,
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo",
        options: [] // Aquí deberías incluir las opciones para los tipos
    },
    {
        label: "Motor No.",
        name: "motorNo",
        columns: 2,
        component: "TextField",
        placeholder: "Ingrese el número de motor"
    },
    {
        label: "Chasis No.",
        name: "chasisNo",
        columns: 2,
        component: "TextField",
        placeholder: "Ingrese el número de chasis"
    },
    {
        label: "Cilindraje",
        name: "cilindraje",
        columns: 2,
        component: "TextField",
        placeholder: "Ingrese el cilindraje",
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: "Número de Placa",
        name: "numeroPlaca",
        columns: 2,
        component: "TextField",
        placeholder: "Ingrese el número de placa"
    },
    {
        label: "Fecha de Adquisición",
        name: "fechaAdquisicion",
        component: "Date",
        columns: 2,
        placeholder: "Seleccione la fecha de adquisición"
    },
    {
        title: "Guardar",
        component: "Submit",
    }
]

export const GUARANTEE_AVALUO_FIELDS = [
    {
        label: "Valor de Avalúo",
        name: "valorAvaluo",
        component: "TextField",
        placeholder: "Ingrese el valor del avalúo",
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: "Nombre del Valuador",
        name: "nombreValuador",
        component: "TextField",
        placeholder: "Ingrese el nombre del valuador"
    },
    {
        label: "Tipo de Identificación",
        name: "Type",
        component: "CustomDropdown",
        placeholder: "Seleccione el tipo de identificación",
        options: [] // Aquí deberías incluir las opciones para los tipos de identificación
    },
    {
        label: "Número de Identificación",
        name: "",
        component: "TextField",
        placeholder: "Ingrese el número de identificación"
    },
    {
        label: "Información Adicional",
        name: "additionalInformation",
        component: "TextField",
        placeholder: "Ingrese información adicional",
        customProps: {
            multiline: true,
            numberOfLines: 3
        }
    },
    {
        title: "Guardar",
        component: "Submit",
    }
]

export const GUARANTEE_HIPOTECARY_GENERAL_FIELDS = [
    {
        label: "Hipotecaria",
        component: "Title",
    },
    {
        label: 'Id Registro',
        name: 'idRegistro',
        component: 'TextField',
        columns: 2,
        placeholder: 'Ingrese el ID de registro',
    },
    {
        label: 'Fecha de adquisición',
        name: 'fechaAdquisicion',
        component: 'Date',
        columns: 2,
        placeholder: 'Seleccione la fecha de adquisición',
    },
    {
        label: 'Descripción',
        name: 'descripcion',
        component: 'TextField',
        placeholder: 'Ingrese la descripción',
        customProps: {
            multiline: true,
            numberOfLines: 3,
        },
    },
    {
        label: 'Tipo de Garantía 1',
        name: 'tipoGarantia1',
        columns: 2,
        component: 'CustomDropdown',
        placeholder: 'Seleccione el tipo de garantía 1',
        options: CATALOGS.guaranteeTypes,
    },
    {
        label: 'Tipo de Garantía 2',
        name: 'tipoGarantia2',
        columns: 2,
        component: 'CustomDropdown',
        placeholder: 'Seleccione el tipo de garantía 2',
        options: CATALOGS.guaranteeTypes,
    },
    {
        label: "Registro de la Propiedad",
        subLabel: "Documento publico nacional, con fecha de registros.",
        component: "Title",
    },
    {
        label: 'Tomo',
        name: 'registroPropiedadTomo',
        component: 'TextField',
        columns: 2,
        placeholder: 'Ingrese el registro de propiedad toma',
    },
    
    {
        label: 'Folio',
        name: 'registroPropiedadFolio',
        component: 'TextField',
        columns: 2,
        placeholder: 'Ingrese el registro de propiedad folio',
    },
    {
        title: "Guardar",
        component: "Submit",
    }
];