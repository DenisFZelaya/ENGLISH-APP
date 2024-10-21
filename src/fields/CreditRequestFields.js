import CATALOGS from '../constants/CATALOGS.json'

export const CREDIT_REQUEST_FIELDS = [
    {
      label: 'Producto (Tipo de Credito)',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Fondo',
      name: 'fondo',
      component: 'CustomDropdown',
      placeholder: 'Fondo',
      columns: 4,
      options: CATALOGS.funds
    },
    {
      label: 'Programa',
      name: 'programa',
      component: 'CustomDropdown',
      placeholder: 'Programa',
      options: CATALOGS.creditPrograms,
    },
    {
      label: 'Clase de Colocaciones (Tipo de Producto)',
      name: 'programa',
      component: 'CustomDropdown',
      placeholder: 'Programa',
      options: CATALOGS.classes,
    },
    {
      label: '(Tipo de Credito)',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Tipo/Operacion',
      name: 'tpOperation',
      component: 'CustomDropdown',
      placeholder: 'Programa',
      columns: 2,
      options: CATALOGS.operationTypes
    },
    {
      label: 'Tipo Moneda',
      name: 'currency',
      component: 'CustomDropdown',
      placeholder: 'Programa',
      columns: 2,
      options:CATALOGS.currencies
    },
    {
      label: 'Tipo de Credito',
      name: 'creditType',
      component: 'CustomDropdown',
      placeholder: 'Tipo de Credito',
      columns: 2,
      options: CATALOGS.creditTypes,
    },
    {
      label: 'Actividad Financiada',
      name: 'finantialActivity',
      component: 'CustomDropdown',
      placeholder: 'Actividad Financiada',
      columns: 2,
      options: CATALOGS.financialActivities,
    },
    {
      label: 'Tipo de Plan',
      name: 'planType',
      component: 'CustomDropdown',
      placeholder: 'Tipo de Plan',
      columns: 2,
      options: CATALOGS.planType,
    },
    {
      label: 'Destino',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Destino del Crédito',
      name: 'destinations',
      component: 'CustomDropdownSearch',
      placeholder: 'Seleccione el destino del crédito',
      options: CATALOGS.destinations,
    },
    {
      title: "Guardar",
      component: "Submit",
  },
    {
      label: 'Renegociacion',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Tipo',
      name: 'renegociationType',
      component: 'CustomDropdown',
      placeholder: 'Seleccione el destino del crédito',
      columns: 2,
      options: CATALOGS.renegotiationTypes,
    },
    {
      label: 'Nivel de Riesgo',
      name: 'renegociationLevelRisk',
      component: 'CustomDropdown',
      placeholder: 'Seleccione el destino del crédito',
      columns: 2,
      options: [
        { name: 'Consumo', value: 'consumo' },
        { name: 'Vivienda', value: 'vivienda' },
        { name: 'Negocio', value: 'negocio' },
        { name: 'Educación', value: 'educacion' },
      ],
    },
    {
      label: 'Monto a Solicitar',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Monto Original',
      name: 'montoSolicitado',
      component: 'TextField',
      placeholder: 'Monto Original',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Prima/Anticipo',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Prima/Anticipo',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Monto Solicitado',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Monto Solicitado',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Tasa Anual',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Tasa Anual',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Plazos',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Plazos',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Cuotas',
      subLabel: '',
      component: 'Title',
    },
    {
      label: 'Valor de la Cuota',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Valor de la Cuota',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Interes',
      name: 'plazo',
      component: 'TextField',
      placeholder: 'Interes',
      columns: 2,
      customProps: {
        keyboardType: 'numeric',
      },
    },
    {
      label: 'Forma de Pago',
      subLabel: 'destinoCredito',
      component: 'Title',
    },
    {
      label: 'Forma de Pago',
      name: 'payMethod',
      component: 'CustomDropdown',
      placeholder: 'Seleccione la forma de pago',
      columns: 2,
      options: CATALOGS.paymentMethods,
    },
    {
      label: 'Frecuencia de Pago',
      name: 'payFrequencie',
      component: 'CustomDropdown',
      placeholder: 'Seleccione la frecuencia de pago',
      columns: 2,
      options: CATALOGS.frequencies,
    },
    {
      label: 'Observaciones',
      name: 'observations',
      component: 'TextField',
      placeholder: 'Ingrese observaciones adicionales',
      customProps: {
        multiline: true,
        numberOfLines: 4,
      },
    },
    {
      title: "Guardar",
      component: "Submit",
  },
  ];