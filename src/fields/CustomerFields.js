import CATALOGS from '../constants/CATALOGS.json'

export const CUSTOMER_GENERAL_INFORMATION = [
    {
        label: 'Información Personal',
        subLabel: 'Información personal del solicitante',
        component: 'Title',
    },
    {
        label: 'Tipo de Persona',
        name: 'identificationType',
        component: 'CustomDropdown',
        options: CATALOGS.personType,
    },
    {
        label: 'Tipo de Identificación',
        name: 'identificationType',
        component: 'CustomDropdown',
        options: CATALOGS.identificationType,
    },
    {
        label: 'Nombres',
        name: 'firstName',
        component: 'TextField',
        placeholder: 'Nombres',
        required: true,
    },
    {
        label: 'Apellidos',
        name: 'lastName',
        component: 'TextField',
        placeholder: 'Apellidos',
        required: true,
        validationParams: {
            minLength: 2,
            maxLength: 50
        },
    },
    {
        label: 'DNI',
        name: 'identification',
        component: 'TextField',
        placeholder: 'DNI',
        required: true,
        validationParams: {
            minLength: 2,
            maxLength: 5
        },
    },
    {
        label: 'Nacimiento',
        subLabel: 'Fecha de nacimiento del solicitante',
        component: 'Title',
    },
    {
        label: 'Nacionalidad',
        name: 'country',
        component: 'CustomDropdownSearch',
        columns: 2,
        options: CATALOGS.countries,
    },
    {
        label: 'Lugar de Nacimiento',
        name: 'birthPlace',
        component: 'TextField',
        placeholder: 'Lugar de Nacimiento',
        columns: 2,
    },
    {
        label: 'Fecha de Nacimiento',
        name: 'birthDate',
        component: 'Date',
        placeholder: 'Fecha de Nacimiento',
    },

    {
        label: 'Otros',
        subLabel: '',
        component: 'Title',
    },
    {
        label: 'Género',
        name: 'gender',
        component: 'CustomDropdown',
        columns: 2,
        options: CATALOGS.genders,
    },

    {
        label: 'Estado Civil',
        name: 'civilState',
        columns: 2,
        component: 'CustomDropdown',
        options: CATALOGS.civilStatus,
    },
    {
        label: 'Nivel Educativo',
        name: 'educationLevel',
        component: 'CustomDropdown',
        options: CATALOGS.educationLevel,
    },
    {
        label: 'Dependientes',
        subLabel: 'Personas que dependen económicamente del solicitante',
        component: 'Title',
    },
    {
        label: 'Número de Dependientes',
        name: 'dependents',
        component: 'TextField',
        placeholder: 'Número de Dependientes',
        customProps: {
            inputMode: 'numeric'
        },
        columns: 2,
    },
    {
        label: 'Hijos Dependientes',
        name: 'children',
        component: 'TextField',
        placeholder: 'Hijos Dependientes',
        columns: 2,
        customProps: {
            inputMode: 'numeric'
        }
    },
    {
        title: "Guardar",
        component: "Submit",
    },
];

export const CUSTOMER_DIRECTION_INFORMATION = [
    {
        label: 'Domicilio',
        subLabel: 'Domicilio del solicitante',
        component: 'Title',
    },
    {
        label: 'Estado/Departamento',
        name: 'estado',
        component: 'CustomDropdownSearch',
        placeholder: 'Estado/Departamento',
        columns: 2,
        options: CATALOGS.departaments,
    },
    {
        label: 'Ciudad/Municipio',
        name: 'ciudad',
        component: 'CustomDropdownSearch',
        placeholder: 'Ciudad/Municipio',
        columns: 2,
        options: CATALOGS.cities,
    },
    {
        label: 'Barrio/Colonia',
        name: 'barrio',
        component: 'CustomDropdownSearch',
        placeholder: 'Barrio/Colonia',
        columns: 2,
        options: [
            { name: 'DNI', value: 'dni' },
            { name: 'Passport', value: 'passport' },
        ],
    },
    {
        label: 'Aldea/Barrio',
        name: 'aldea',
        component: 'CustomDropdownSearch',
        columns: 2,
        placeholder: 'Aldea/Barrio',
        options: [
            { name: 'DNI', value: 'dni' },
            { name: 'Passport', value: 'passport' },
        ],
    },
    {
        label: 'Dirección Completa  ',
        name: 'fullAddress',
        component: 'TextField',
        placeholder: 'Dirección Completa',
        customProps: {
            multiline: true,
            numberOfLines: 3
        }
    },
    {
        label: 'Tipo de Residencia',
        name: 'residenceType',
        component: 'CustomDropdown',
        placeholder: 'Tipo de Residencia',
        columns: 2,
        options: CATALOGS.residenceTypes,
    },
    {
        label: 'Tiempo de Residir',
        name: 'residenceTime',
        component: 'CustomDropdown',
        placeholder: 'Seleccione el tiempo de residencia',
        columns: 2,
        options: CATALOGS.residenceTimes
    },
    {
        label: 'Teléfono Residencia',
        name: 'residencePhone',
        component: 'TextField',
        placeholder: 'Teléfono Residencia',
        columns: 2,
        customProps: {
            keyboardType: 'phone-pad'
        }
    },
    {
        label: 'Teléfono Móvil',
        name: 'mobilePhone',
        component: 'TextField',
        placeholder: 'Teléfono Móvil',
        columns: 2,
        customProps: {
            keyboardType: 'phone-pad'
        }
    },
    {
        label: 'Dirección en el Mapa',
        subLabel: 'Dirección en el Mapa del solicitante',
        component: 'Title',
    },
    {
        label: 'Latitud',
        name: 'latitude',
        component: 'TextField',
        placeholder: 'Latitud',
        columns: 2,
        customProps: {
            keyboardType: 'phone-pad',
            editable: false
        }
    },
    {
        label: 'Longitud',
        name: 'longitude',
        component: 'TextField',
        placeholder: 'Longitud',
        columns: 2,
        customProps: {
            editable: false
        }
    },
    {
        title: "Guardar",
        component: "Submit",
    },
]

export const CUSTOMER_LABORAL_INFORMATION = [
    {
        label: 'Datos Laborales',
        subLabel: 'Información laboral del solicitante',
        component: 'Title',
    },
    {
        label: 'Ocupación',
        name: 'ocupation',
        component: 'CustomDropdownSearch',
        placeholder: 'Seleccione la ocupación',
        columns: 2,
        options: CATALOGS.ocupations,
    },
    {
        label: 'Tipo de Empleado',
        name: 'employmentType',
        component: 'CustomDropdown',
        placeholder: 'Seleccione el tipo de empleado',
        columns: 2,
        options: [
            { name: 'Tiempo completo', value: 'tiempo_completo' },
            { name: 'Medio tiempo', value: 'medio_tiempo' },
            { name: 'Freelance', value: 'freelance' },
        ],
    },
    {
        label: 'Sabe Leer',
        name: 'read',
        component: 'Switch',
        placeholder: '¿Sabe leer?',
        columns: 2,
    },
    {
        label: 'Sabe Escribir',
        name: 'write',
        component: 'Switch',
        placeholder: '¿Sabe escribir?',
        columns: 2,
    },
    {
        label: 'Salario/Ingreso Mensual',
        name: 'salarioMensual',
        component: 'TextField',
        placeholder: 'Ingrese el salario mensual',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        },
    },
    {
        label: 'Otros Ingresos',
        name: 'otrosIngresos',
        component: 'TextField',
        placeholder: 'Ingrese otros ingresos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        },
    },
    {
        label: 'Fuente Otros Ingresos',
        name: 'fuenteOtrosIngresos',
        component: 'TextField',
        placeholder: 'Fuente Otros Ingresos',
    },

];

export const CUSTOMER_BUSINESS_FIELDS = [
    {
        label: 'Datos del Negocio/Empresa',
        subLabel: 'Información del negocio o empresa',
        component: 'Title',
    },
    {
        label: 'Nombre del Negocio/Empresa',
        name: 'bussinessName',
        component: 'TextField',
        placeholder: 'Nombre del Negocio/Empresa',
    },
    {
        label: 'Dirección Completa',
        name: 'bussinessAddress',
        component: 'TextField',
        placeholder: 'Ingrese la dirección completa del negocio',
        customProps: {
            multiline: true,
            numberOfLines: 3,
        },
    },
    {
        label: 'Cargo o Puesto',
        name: 'position',
        component: 'TextField',
        placeholder: 'Cargo o Puesto',
        columns: 2,
    },
    {
        label: 'Fecha de inicio a trabajar',
        name: 'startDateJob',
        component: 'Date',
        placeholder: 'Fecha de inicio a trabajar',
        columns: 2,
    },
    {
        label: 'Teléfono',
        name: 'bussinessPhone',
        component: 'TextField',
        placeholder: 'Teléfono del negocio',
        columns: 2,
        customProps: {
            keyboardType: 'phone-pad',
        },
    },
    {
        label: 'Teléfono Fax',
        name: 'faxPhone',
        component: 'TextField',
        placeholder: 'Teléfono Fax',
        columns: 2,
        customProps: {
            keyboardType: 'phone-pad',
        },
    },
    {
        title: "Guardar",
        component: "Submit",
    },
];

export const CUSTOMER_ADDITIONAL_FIELDS = [
    {
        label: 'Datos Adicionales',
        subLabel: 'Información adicional del solicitante',
        component: 'Title',
    },
    {
        label: 'Sector Económico',
        name: 'economicSector',
        component: 'CustomDropdownSearch',
        placeholder: 'Buscar sector económico',
        options: CATALOGS.economicSectors,
    },
    {
        label: 'Grupo Económico',
        name: 'economicGroup',
        component: 'CustomDropdown',
        placeholder: 'Seleccione el grupo económico',
        options: CATALOGS.economicGroups
    },
    {
        label: 'Medio de comunicación principal',
        name: 'medioComunicacion',
        component: 'CustomDropdown',
        placeholder: 'Medio de comunicación',
        options: [
            { name: 'Email', value: 'email' },
            { name: 'Teléfono', value: 'telefono' },
            { name: 'WhatsApp', value: 'whatsapp' },
        ],
    },
    {
        label: 'Email',
        name: 'email',
        component: 'TextField',
        placeholder: 'Ingrese el email',
        customProps: {
            keyboardType: 'email-address',
        },
    },
    {
        title: "Guardar",
        component: "Submit",
    },
];
