import CATALOGS from '../constants/CATALOGS.json'

export const GUARANTEE_FIELDS = [
    {
        label: "Agregar Nueva Garantia",
        subLabel: "Nueva Garantia",
        component: "Title",
    },
    {
        label: 'Tipo de Garantía',
        name: 'guaranteeType',
        component: 'CustomDropdown',
        options: CATALOGS.guaranteeTypes,
        columns: 2,
    },
    {
        label: 'Cobertura (%)',
        name: 'coverage',
        component: 'TextField',
        placeholder: 'Cobertura (%)',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        },
    },
    {
        label: 'Sueldo ó Avalúo',
        name: 'salaryAvaluation',
        component: 'TextField',
        placeholder: 'Sueldo ó Avalúo',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        },
    },
    {
        label: 'Tipo de Obligación',
        name: 'obligationType',
        component: 'CustomDropdown',
        columns: 2,
        options: CATALOGS.obligationTypes,
    },
    {
        label: 'No. Identificación del Aval',
        name: 'avalIdentification',
        component: 'TextField',
        placeholder: 'No. Identificación del Aval',
        conditionalRender: (values) => values?.guaranteeType === '1',
    },
]