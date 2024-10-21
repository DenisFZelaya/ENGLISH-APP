
import CATALOGS from '../../../../../constants/CATALOGS.json'

export const REFERENCE_FIELDS = [
    {
      label: 'Tipo de Referencia',
      name: 'referenceType',
      component: 'CustomDropdown',
      placeholder: 'Seleccione el tipo de referencia',
      options: CATALOGS.typePersonalReferences,
      required: true,
    },
    {
      label: 'Nombre del Referente',
      name: 'nombreReferente',
      component: 'TextField',
      placeholder: 'Nombre del Referente',
      required: true,
    },
    {
      label: 'Es Familiar',
      name: 'isFamily',
      component: 'Switch',
      placeholder: '¿Es familiar?',
      columns: 2,
    },
    {
      label: 'Relación',
      name: 'relation',
      component: 'TextField',
      placeholder: 'Relación con el solicitante',
      columns: 2,
    },
    {
      label: 'Dirección Actual',
      name: 'currentAddress',
      component: 'TextField',
      placeholder: 'Dirección Actual',
      customProps: {
        multiline: true,
        numberOfLines: 3,
      },
    },
    {
      label: 'Tipo de Residencia',
      name: 'residenceType',
      component: 'CustomDropdown',
      placeholder: 'Seleccione el tipo de residencia',
      columns: 2,
      options: CATALOGS.residenceTypes,
    },
    {
      label: 'Tiempo de Residir',
      name: 'residenceTime',
      component: 'CustomDropdown',
      placeholder: 'Seleccione el tiempo de residencia',
      columns: 2,
      options: CATALOGS.residenceTimes,
    },
    {
      label: 'Teléfono de Residencia',
      name: 'residencePhone',
      component: 'TextField',
      placeholder: 'Teléfono de Residencia',
      columns: 2,
      customProps: {
        keyboardType: 'phone-pad',
      },
    },
    {
      label: 'Teléfono Móvil',
      name: 'mobilePhone',
      component: 'TextField',
      placeholder: 'Teléfono Móvil',
      required: true,
      columns: 2,
      customProps: {
        keyboardType: 'phone-pad',
      },
    },
    {
      label: 'Teléfono de Trabajo',
      name: 'phoneJob',
      component: 'TextField',
      placeholder: 'Teléfono de Trabajo',
      customProps: {
        keyboardType: 'phone-pad',
      },
    },
    {
      label: 'Correo Electrónico',
      name: 'email',
      component: 'TextField',
      placeholder: 'Correo Electrónico',
      customProps: {
        keyboardType: 'email-address',
      },
    },
    {
      label: 'Observación',
      name: 'observation',
      component: 'TextField',
      placeholder: 'Observaciones',
      required: true,
      customProps: {
        multiline: true,
        numberOfLines: 3,
      },
    },
  ];