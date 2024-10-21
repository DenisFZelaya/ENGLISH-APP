export const FINANCIAL_SIT_FINAN = [
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
        required: true,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric'
        }
    },
    {
        label: 'Regular',
        name: 'ventasRegular',
        component: 'TextField',
        placeholder: 'Regular',
        columns: 2,
        required: true,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Baja',
        name: 'ventasBaja',
        component: 'TextField',
        placeholder: 'Baja',
        columns: 2,
        required: true,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Total Mensual',
        name: 'totalMensual',
        component: 'TextField',
        placeholder: 'Total mensual',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false,
            inputMode: 'numeric',
        },
        calculation: {
            type: "sum",
            fields: ["ventasBuena", "ventasRegular", "ventasBaja"],
        },
    },
    {
        component: 'Title',
        columns: 2,
        showHr: false,
    },
    {
        title: 'Guardar',
        component: 'Submit',
        columns: 2,
    },
    // ---- OTROS INGRESOS ------------------------------
    {
        label: 'Otros Ingresos',
        name: 'otrosIngresos',
        component: 'Title',
    },
    {
        label: 'Cónyuge',
        name: 'otrosIngConyuge',
        component: 'TextField',
        placeholder: 'Cónyuge',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Otros Negocios',
        name: 'otrosIngOtrosNegocios',
        component: 'TextField',
        placeholder: 'Otros Negocios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Remesas',
        name: 'otrosIngRemesas',
        component: 'TextField',
        placeholder: 'Remesas',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Salarios',
        name: 'otrosIngSalarios',
        component: 'TextField',
        placeholder: 'Salarios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
            inputMode: 'numeric',
        }
    },
    {
        label: 'Total Otros Ingresos',
        name: 'totalOtrosIngresos',
        component: 'TextField',
        placeholder: 'Total otros ingresos',
        customProps: {
            keyboardType: 'numeric',
            editable: false,
            maxLength: 10,
            inputMode: 'numeric',
        },
        calculation: {
            type: "sum",
            fields: ["otrosIngSalarios", "otrosIngRemesas", "otrosIngConyuge", "otrosIngOtrosNegocios"]
        },
    },
    // -------------- GASTOS OPERATIVOS ----------------------------
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
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Agua',
        name: 'gasOpeAgua',
        component: 'TextField',
        placeholder: 'Agua',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Electricidad',
        name: 'gasOpeElectricidad',
        component: 'TextField',
        placeholder: 'Electricidad',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Telefono',
        name: 'gasOpeTelefono',
        component: 'TextField',
        placeholder: 'Telefono',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Impuestos',
        name: 'gasOpeImpuestos',
        component: 'TextField',
        placeholder: 'Impuestos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Transporte',
        name: 'gasOpeTransporte',
        component: 'TextField',
        placeholder: 'Transporte',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Salarios',
        name: 'gasOpeSalarios',
        component: 'TextField',
        placeholder: 'Salarios',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Mant y Renta',
        name: 'gasOpeMantYRenta',
        component: 'TextField',
        placeholder: 'Mant y Renta',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Gas/Lena',
        name: 'gasOpeGasLenia',
        component: 'TextField',
        placeholder: 'Gas/Lena',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'CTAS. PREST',
        name: 'gasOpeCTASPREST',
        component: 'TextField',
        placeholder: 'CTAS. PREST',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Otros',
        name: 'gasOpeOtros',
        component: 'TextField',
        placeholder: 'Otros',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            maxLength: 10,
        }
    },
    {
        label: 'Total Gastos Operativos',
        name: 'totalGastosOperativos',
        component: 'TextField',
        placeholder: 'Total Gastos Operativos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        },
        calculation: {
            type: "sum",
            fields: ["gasOpeAlquiler", "gasOpeAgua", "gasOpeElectricidad", "gasOpeTelefono", "gasOpeImpuestos", "gasOpeTransporte", "gasOpeSalarios", "gasOpeMantYRenta", "gasOpeGasLenia", "gasOpeCTASPREST", "gasOpeOtros"]
        },
    },
    {
        component: 'Title',
        columns: 2,
        showHr: false,
    },
    {
        title: 'Guardar',
        component: 'Submit',
        columns: 2,
    },
    // -------------- GASTOS FAMILIARES ----------------------------
    {
        label: 'Gastos Familiares',
        component: 'Title',
    },
    {
        label: 'Alimentacion',
        name: 'gasFamAlimientacion',
        component: 'TextField',
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
        name: 'totalGasFam',
        component: 'TextField',
        placeholder: 'Total Gastos Familiares',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
            editable: false
        },
        calculation: {
            type: "sum",
            fields: ["gasFamAlimientacion", "gasFamVestuario", "gasFamVivienda", "gasFamSalud", "gasFamEducacion", "gasFamTransporte", "gasFamAgua", "gasFamElectricidad", "gasFamGas", "gasFamTelefono", "gasFamOtros"]
        },
    },
    // -------------- ESTADO GANANCIAS Y PERDIDAS ----------------------------
    {
        label: 'Estado de Ganancias y Pérdidas',
        name: 'estadoGananciaPerdida',
        component: 'Title',
    },
    {
        label: 'Ingreso Por Venta',
        name: 'ganYperIngresoPorVenta',
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
        name: 'ganYperMenosGastosOperativos',
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

    {
        label: 'Ganancias Ajustadas',
        component: 'Title',
    },
    {
        label: 'Mensual',
        name: 'ganYperMensual',
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
        name: 'ganYperCatorcenal',
        component: 'TextField',
        placeholder: 'Catorcenal',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Semanal',
        name: 'ganYperSemanal',
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
        name: 'ganYperIngresos',
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
        name: 'ganYperEgresos',
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
        name: 'ganYperVentas',
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
        name: 'ganYperUtilidadNeta',
        component: 'TextField',
        placeholder: 'Utilidad Neta',
        customProps: {
            keyboardType: 'numeric',
            editable: false
        }
    },
    {
        component: 'Title',
        columns: 2,
        showHr: false,
    },
    {
        title: 'Guardar',
        component: 'Submit',
        columns: 2,
    },
]

export const FINANCIAL_FIELDS_ACTIVOS = [
    {
        label: 'Activos',
        component: 'Title',
    },
    {
        label: 'Efectivo (1)',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Efectivo (1)',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        }
    },
    {
        label: 'Ahorros',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Ahorros',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Cuentas Por Cobrar',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Cuentas Por Cobrar',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Inventario',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Inventario',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Maquinaria y Equipo',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Maquinaria y Equipo',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Terrenos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Terrenos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vivienda',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Vivienda',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Vehículos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Vehículos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Teléfonos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Teléfonos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Activos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Total Activos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: '',
        name: '',
        component: 'Title',
        columns: 2,
        showHr: false,
    },
    {
        columns: 2,
        title: 'Guardar',
        component: 'Submit',
    },
    // Aquí puedes agregar los campos del estado de ganancias y pérdidas siguiendo el mismo patrón
];

export const FINANCIAL_FIELDS_PASIVOS = [
    {
        label: 'Pasivos',
        component: 'Title',
    },
    {
        label: 'Bancos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Bancos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric',
        }
    },
    {
        label: 'Cooperativa',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Cooperativa',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Casas de Empeño',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Casas de Empeño',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Microfinanciera',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Microfinanciera',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Prestamista',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Prestamista',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Programa de Gobierno',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Programa de Gobierno',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Casas Comerciales',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Casas Comerciales',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Anticipos por Mercancia',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Anticipos por Mercancia',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Familiares',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Familiares',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        label: 'Total Pasivos',
        name: 'ingresosSalarios',
        component: 'TextField',
        placeholder: 'Total Pasivos',
        columns: 2,
        customProps: {
            keyboardType: 'numeric'
        }
    },
    {
        component: 'Title',
        columns: 2,
        showHr: false,
    },
    {
        title: 'Guardar',
        component: 'Submit',
        columns: 2,
    },
    // Aquí puedes agregar los campos del estado de ganancias y pérdidas siguiendo el mismo patrón
];