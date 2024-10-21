export const FIELDS = [
    {
        label: "Dirección de Domicilio Actual",
        name: "departament",
        component: "Title",
    },
    {
        label: "Correo Electrónico",
        name: "email",
        component: "TextField",
        placeholder: "Ingrese su correo",
        required: true,
        columns: 2,
    },
    {
        "label": "Monto del préstamo",
        "name": "loanAmount",
        "component": "TextField",
        "placeholder": "Ingrese el monto del préstamo",
        "columns": 2,
        "validate": {
            "required": true,
            "numeric": true,
            "min": 1000,
            "max": 50000,
            "message": "El monto del préstamo debe estar entre 1000 y 50000"
        }
    },
    {
        label: "Validación de igualdad de campos (match)",
        subLabel: "Se utiliza para asegurarse de que dos campos coincidan, como cuando se confirma una contraseña o se verifica un correo electrónico.",
        component: "Title",
    },
    {
        "label": "Contraseña",
        "name": "password",
        "component": "TextField",
        "placeholder": "Ingrese su contraseña",
        "columns": 2,
        "validate": {
            "required": true,
            "minLength": 6
        }
    },
    {
        "label": "Confirmar contraseña",
        "name": "confirmPassword",
        "component": "TextField",
        "placeholder": "Confirme su contraseña",
        "columns": 2,
        "validate": {
            "required": true,
            "match": "password",
            "message": "Las contraseñas no coinciden"
        }
    },
    {
        label: "Validación de tipo de archivo (fileType)",
        subLabel: "",
        component: "Title",
    },
    {
        "label": "Subir documento",
        "name": "document",
        "component": "FileInput",
        "columns": 2,
        "validate": {
            "required": true,
            "fileType": ["pdf", "jpg", "png"],
            "message": "Solo se permiten archivos PDF, JPG o PNG"
        }
    }
    ,
    {
        label: "conditionalRequired",
        subLabel: "loanAmount ES IGUAL A 2",
        component: "Title",
    },
    {
        "label": "Justificar Monto Prestamo es 2",
        "name": "avalIdentification",
        "component": "TextField",
        "placeholder": "Ingrese el número de identificación del aval",
        "columns": 2,
        "validate": {
            "conditionalRequired": {
                "field": "loanAmount",
                "value": "2",
                "message": "Este campo es requerido xq loanAmount es 2"
            }
        }
    },
    {
        label: "conditionalRender por valor exacto",
        subLabel: "Justificar ES IGUAL A dfz",
        component: "Title",
    },
    {
        "label": "Render condicionado",
        "name": "avalIdentification2",
        "component": "TextField",
        "placeholder": "Ingrese el número de identificación del aval",
        "columns": 2,
        "conditionalRender": {
            "field": "avalIdentification",
            "value": "dfz"
        },
    },
    {
        label: "conditionalRender si el referente no es vacio",
        subLabel: "Render condicionado no esta vacio",
        component: "Title",
    },
    {
        "label": "Render condicionado (no vacío)",
        "name": "avalIdentification3",
        "component": "TextField",
        "placeholder": "Ingrese el número de identificación del aval",
        "columns": 2,
        "conditionalRenderNoVoid": {
            "field": "avalIdentification2",
        },
    },
    {
        title: "Enviar",
        component: "Submit",
    },
    {
        label: "Validación de Formato de Fecha (dateFormat)",
        subLabel: "Esta validación se asegura de que el valor ingresado sea una fecha válida en un formato específico (por ejemplo, DD/MM/YYYY).",
        component: "Title",
    },
    {
        "label": "Fecha de Nacimiento",
        "name": "birthdate",
        "component": "TextField",
        "placeholder": "DD/MM/YYYY",
        "validate": {
            "required": true,
            "dateFormat": {
                "pattern": "DD/MM/YYYY",
                "message": "La fecha debe tener el formato DD/MM/YYYY",
                "regex": "/^(\d{2})\/(\d{2})\/(\d{4})$/"
            }
        }
    },
    {
        label: "Validación de Formato de Teléfono (phoneFormat)",
        subLabel: "Valida que el campo tenga un formato válido para números de teléfono, con o sin código de país",
        component: "Title",
    },
    {
        "label": "Número de Teléfono",
        "name": "phoneNumber",
        "component": "TextField",
        "placeholder": "Ingrese su número de teléfono",
        "validate": {
            "required": true,
            "phoneFormat": {
                "pattern": "+XXX XXXX XXXX",
                "regex": "^\\+?\\d{3}\\s\\d{4}\\s\\d{4}$",
                "message": "Número de teléfono no válido. Debe tener el formato +XXX XXXX XXXX"
            }
        },
        "customProps": {
            "keyboardType": "phone-pad"
        }
    },

]

// Pendientes
// - condicional label> se se cumple la condicion cambiar el titulo del campo

const NOT_IMPLEMENTED_COMPARACION_CAMPOS = [
    /**
     * 4. Validación basada en comparación de campos (conditionalComparison)
Puedes agregar reglas de validación que comparen el valor de un campo con otro, 
como validar si un valor es mayor que otro, por ejemplo, si el monto del préstamo debe ser mayor que el interés.
     */
    {
        "label": "Monto del préstamo",
        "name": "loanAmount",
        "component": "TextField",
        "placeholder": "Ingrese el monto",
        "validate": {
            "required": true
        }
    },
    {
        "label": "Interés",
        "name": "interest",
        "component": "TextField",
        "placeholder": "Ingrese el interés",
        "validate": {
            "conditionalComparison": {
                "field": "loanAmount",
                "comparison": "greaterThan",
                "message": "El interés debe ser menor que el monto del préstamo"
            }
        }
    }
]

/**
 *   if (field.validate?.conditionalComparison) {
    const { field: compareField, comparison, message } = field.validate.conditionalComparison;
    const compareValue = parseFloat(values[compareField]);
    const fieldValue = parseFloat(value);

    if (comparison === "greaterThan" && fieldValue >= compareValue) {
      error = message || 'Valor no válido';
    }
  }
 */