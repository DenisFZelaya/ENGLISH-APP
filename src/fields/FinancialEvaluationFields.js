
export const FINANCIAL_FIELDS_1 = [
    {
        label: 'Evaluación Financiera',
        subLabel: 'Información financiera del solicitante',
        component: 'Title',
    },
    {
        label: 'Ventas',
        name: 'ventas',
        component: 'Title',
    },
    {
        label: 'Buena',
        name: 'ventasBuena',
        component: 'TextField',
        placeholder: 'Buena',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Regular',
        name: 'ventasRegular',
        component: 'TextField',
        placeholder: 'Regular',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Baja',
        name: 'ventasBaja',
        component: 'TextField',
        placeholder: 'Baja',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Mensual',
        name: 'totalMensual',
        component: 'TextField',
        placeholder: 'Total mensual',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_2 = [
    {
        label: 'Otros Ingresos',
        component: 'Title',
    },
    {
        label: 'Cónyuge',
        name: 'otrosIngresosConyugue',
        component: 'TextField',
        placeholder: 'Cónyuge',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Otros Negocios',
        name: 'otrosIngresos',
        component: 'TextField',
        placeholder: 'Otros Negocios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Remesas',
        name: 'otrosIngresosRemesas',
        component: 'TextField',
        placeholder: 'Remesas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Salarios',
        name: 'otrosIngresosSalarios',
        component: 'TextField',
        placeholder: 'Salarios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Otros Ingresos',
        name: 'totalOtrosIngresos',
        component: 'TextField',
        placeholder: 'Total otros ingresos',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_3 = [
    {
        label: 'Gastos Operativos',
        name: 'gastosOperativos',
        component: 'Title',
    },
    {
        label: 'Alquiler',
        name: 'gasOpeAlquiler',
        component: 'TextField',
        placeholder: 'Alquiler',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Agua',
        name: 'gasOpeAgua',
        component: 'TextField',
        placeholder: 'Agua',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Electricidad',
        name: 'gasOpeElectricidad',
        component: 'TextField',
        placeholder: 'Electricidad',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Telefono',
        name: 'gasOpeTelefono',
        component: 'TextField',
        placeholder: 'Telefono',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Impuestos',
        name: 'gasOpeImpuestos',
        component: 'TextField',
        placeholder: 'Impuestos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Transporte',
        name: 'gasOpeTransporte',
        component: 'TextField',
        placeholder: 'Transporte',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Salarios',
        name: 'gasOpeSalarios',
        component: 'TextField',
        placeholder: 'Salarios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Mant y Renta',
        name: 'gasOpeManYRenta',
        component: 'TextField',
        placeholder: 'Mant y Renta',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Gas/Lena',
        name: 'gasOpeGasLenia',
        component: 'TextField',
        placeholder: 'Gas/Lena',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'CTAS. PREST',
        name: 'gasOpeCTasPrest',
        component: 'TextField',
        placeholder: 'CTAS. PREST',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Otros',
        name: 'gasOpeOtros',
        component: 'TextField',
        placeholder: 'Otros',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total',
        name: 'gasOpeTotal',
        component: 'TextField',
        placeholder: 'Total Gastos Operativos',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_4 = [
    {
        label: 'Gastos Familiares',
        name: 'gastosFamiliares',
        component: 'Title',
    },
    {
        label: 'Alimentacion',
        name: 'gasFamAlimentacion',
        placeholder: 'Alimentacion',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vestuario',
        name: 'gasFamVestuario',
        component: 'TextField',
        placeholder: 'Vestuario',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vivienda',
        name: 'gasFamVivienda',
        component: 'TextField',
        placeholder: 'Vivienda',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Salud',
        name: 'gasFamSalud',
        component: 'TextField',
        placeholder: 'Salud',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Educacion',
        name: 'gasFamEducacion',
        component: 'TextField',
        placeholder: 'Educacion',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Transporte',
        name: 'gasFamTransporte',
        component: 'TextField',
        placeholder: 'Transporte',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Agua',
        name: 'gasFamAgua',
        component: 'TextField',
        placeholder: 'Agua',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Electricidad',
        name: 'gasFamElectricidad',
        component: 'TextField',
        placeholder: 'Electricidad',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Gas',
        name: 'gasFamGas',
        component: 'TextField',
        placeholder: 'Gas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Telefono',
        name: 'gasFamTelefono',
        component: 'TextField',
        placeholder: 'Telefono',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Otros',
        name: 'gasFamOtros',
        component: 'TextField',
        placeholder: 'Otros',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Gastos Familiares',
        name: 'gasFamTotalGastosFamiliares',
        component: 'TextField',
        placeholder: 'Total Gastos Familiares',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_5 = [
    {
        label: 'Estado de Ganancias y Pérdidas',
        name: 'estadoGananciaPerdida',
        component: 'Title',
    },
    {
        label: 'Ingreso Por Venta',
        name: 'ganYperIngresoVenta',
        component: 'TextField',
        placeholder: 'Ingreso Por Venta',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Menos Costo de Ventas',
        name: 'ganYperMenosCostoVentas',
        component: 'TextField',
        placeholder: 'Menos Costo de Ventas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Utilidad Bruta',
        name: 'ganYperUtilidadBruta',
        component: 'TextField',
        placeholder: 'Utilidad Bruta',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Menos Gastos Operativos',
        name: 'ganYperMenosGastosOperaticos',
        component: 'TextField',
        placeholder: 'Menos Gastos Operativos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Utilidad Operativa',
        name: 'ganYperUtilidadOperativa',
        component: 'TextField',
        placeholder: 'Utilidad Operativa',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Menos Gastos Familiares',
        name: 'ganYperMenosGastosFamiliares',
        component: 'TextField',
        placeholder: 'Menos Gastos Familiares',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Mas Otros Ingresos',
        name: 'ganYperMasOtrosIngresos',
        component: 'TextField',
        placeholder: 'Mas Otros Ingresos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Ganancias Netas',
        name: 'ganYperGananciasNetas',
        component: 'TextField',
        placeholder: 'Ganancias Netas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Margen de Confiabilidad',
        name: 'ganYperMargenConfiabilidad',
        component: 'TextField',
        placeholder: 'Margen de Confiabilidad',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_GANANCIAS_AJUSTADAS = [
    {
        label: 'Ganancias Ajustadas',
        component: 'Title',
    },
    {
        label: 'Mensual',
        name: 'ganajusMensual',
        component: 'TextField',
        placeholder: 'Mensual',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Catorcenal',
        name: 'ganajusCatorcenal',
        component: 'TextField',
        placeholder: 'Catorcenal',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Semanal',
        name: 'ganajusSemanal',
        component: 'TextField',
        placeholder: 'Semanal',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Ingresos',
        name: 'ganajusIngresos',
        component: 'TextField',
        placeholder: 'Ingresos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Egresos',
        name: 'ganajusEgresos',
        component: 'TextField',
        placeholder: 'Egresos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Ventas',
        name: 'ganajusVentas',
        component: 'TextField',
        placeholder: 'Ventas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        label: 'Utilidad Neta',
        name: 'ganajusUtilidadNeta',
        component: 'TextField',
        placeholder: 'Utilidad Neta',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
];

export const FINANCIAL_FIELDS_ACTIVOS = [
    {
        label: 'Activos',
        component: 'Title',
    },
    {
        label: 'Efectivo (1)',
        name: 'activosEfectivo',
        component: 'TextField',
        placeholder: 'Efectivo (1)',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        }
    },
    {
        label: 'Ahorros',
        name: 'activosAhorros',
        component: 'TextField',
        placeholder: 'Ahorros',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Cuentas Por Cobrar',
        name: 'activosCuentasPorCobrar',
        component: 'TextField',
        placeholder: 'Cuentas Por Cobrar',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Inventario',
        name: 'activosInventario',
        component: 'TextField',
        placeholder: 'Inventario',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Maquinaria y Equipo',
        name: 'activosMaquinariaEquipo',
        component: 'TextField',
        placeholder: 'Maquinaria y Equipo',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Terrenos',
        name: 'activosTerrenos',
        component: 'TextField',
        placeholder: 'Terrenos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vivienda',
        name: 'activosVivienda',
        component: 'TextField',
        placeholder: 'Vivienda',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vehículos',
        name: 'activosVehiculos',
        component: 'TextField',
        placeholder: 'Vehículos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Teléfonos',
        name: 'activosTelefonos',
        component: 'TextField',
        placeholder: 'Teléfonos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Activos',
        name: 'totalActivos',
        component: 'TextField',
        placeholder: 'Total Activos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
];

export const FINANCIAL_FIELDS_PASIVOS = [
    {
        label: 'Pasivos',
        component: 'Title',
    },
    {
        label: 'Bancos',
        name: 'pasivosBancos',
        component: 'TextField',
        placeholder: 'Bancos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        }
    },
    {
        label: 'Cooperativa',
        name: 'pasivosCooperatica',
        component: 'TextField',
        placeholder: 'Cooperativa',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Casas de Empeño',
        name: 'pasivosCasasEmpenio',
        component: 'TextField',
        placeholder: 'Casas de Empeño',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Microfinanciera',
        name: 'pasivosMicrofinanciera',
        component: 'TextField',
        placeholder: 'Microfinanciera',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Prestamista',
        name: 'pasivosPrestamista',
        component: 'TextField',
        placeholder: 'Prestamista',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Programa de Gobierno',
        name: 'pasivosProgramaGobierno',
        component: 'TextField',
        placeholder: 'Programa de Gobierno',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Casas Comerciales',
        name: 'pasivosCasasComerciales',
        component: 'TextField',
        placeholder: 'Casas Comerciales',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Anticipos por Mercancia',
        name: 'pasivosAnticiposMercancia',
        component: 'TextField',
        placeholder: 'Anticipos por Mercancia',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Familiares',
        name: 'pasivosFamiliares',
        component: 'TextField',
        placeholder: 'Familiares',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Pasivos',
        name: 'totalPasivos',
        component: 'TextField',
        placeholder: 'Total Pasivos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
];