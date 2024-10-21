import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getData, storeData } from '../utils/storage';


const GuaranteesContext = createContext();

export const GuaranteesProvider = ({ children, credit }) => {
    const [guarantees, setGuarantees] = useState([]);
    const [editingGuarantee, setEditingGuarantee] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState({});

    const STORAGE_KEY = `guaranteesData_${credit?.hashId}`;

    useEffect(() => {
        const fetchGuarantees = async () => {
            try {
                const storedGuarantees = await getData(STORAGE_KEY);
                if (storedGuarantees) {
                    setGuarantees(JSON.parse(storedGuarantees));
                }
            } catch (error) {
                console.error('Error fetching guarantees:', error);
            }
        };
        fetchGuarantees();
    }, [STORAGE_KEY]);

    const saveGuaranteesToStorage = async (updatedGuarantees) => {
        try {
            await storeData(STORAGE_KEY, JSON.stringify(updatedGuarantees));
            setGuarantees(updatedGuarantees);
        } catch (error) {
            console.error('Error saving guarantees:', error);
        }
    };

    const handleSubmit = (values) => {
        console.log("handleSubmit Context Warantee: ", values);
        
        // Variable para almacenar la lista actualizada de garantías
        let updatedGuarantees;
    
        // Verifica si 'values.id' existe y si ya hay una garantía con ese ID
        const guaranteeExists = guarantees.some(g => g.id === values.id);
    
        if (guaranteeExists) {  // Si la garantía ya existe
            // Actualiza la garantía existente
            updatedGuarantees = guarantees.map(g =>
                g.id === values.id ? { ...g, ...values } : g
            );
        } else {
            // Si no existe, agrega una nueva garantía
            updatedGuarantees = [
                ...guarantees,  // Mantiene las garantías anteriores
                {
                    ...values,  // Agrega los valores del formulario
                    id: `dfz-${Date.now()}`,  // Genera un ID único para la nueva garantía
                    guaranteesNav: values.guaranteeType  // Guarda el tipo de garantía
                }
            ];
        }
    
        // Guarda las garantías actualizadas en el almacenamiento
        saveGuaranteesToStorage(updatedGuarantees);
    
        // Cierra el modal y resetea el estado de edición
        setModalVisible(false);
        setEditingGuarantee(null);
    };
    
    
    const handleDelete = (item) => {
        Alert.alert(
            "Eliminar Garantía",
            "¿Está seguro que desea eliminar esta garantía?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    onPress: () => {
                        const updatedGuarantees = guarantees.filter(g => g.id !== item.id);
                        saveGuaranteesToStorage(updatedGuarantees);
                    }
                }
            ]
        );
    };

    const handleEdit = (item) => {
        setEditingGuarantee(item);
        setModalVisible(true);
    };

    return (
        <GuaranteesContext.Provider value={{
            guarantees,
            editingGuarantee,
            setEditingGuarantee,
            handleSubmit,
            handleEdit,
            handleDelete,
            modalVisible,
            setModalVisible,
            selected,
            setSelected
        }}>
            {children}
        </GuaranteesContext.Provider>
    );
};

export const useGuarantees = () => useContext(GuaranteesContext);