import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { getData, storeData } from '../../../../utils/storage'; // Manejo del local storage
import { className } from '../../../../utils/className';

// Listado de estados de crédito
const creditStates = {
  new: 'Nuevo',
  returned: 'Devuelto',
  send: 'Enviado',
};

// Lista de prueba de créditos
const initialCreditList = [
  {
    createdAt: new Date().toISOString(),
    id: 1,
    hashId: 'XXLL_SDWS_ERRW_SASX',
    clientId: '123456789',
    identificacion: '0801199902345',
    name: 'Denis',
    lastName: 'Zelaya',
    state: 'new',
    sendServer: false,
  },
  {
    createdAt: new Date().toISOString(),
    id: 2,
    hashId: 'ASDF_124A_QWER_XCVB',
    clientId: '234567891',
    identificacion: '0801200012346',
    name: 'Genesis',
    lastName: 'Maitee',
    state: 'send',
    sendServer: true,
  },
  {
    createdAt: new Date().toISOString(),
    id: 3,
    hashId: 'QWER_123S_DERF_DFCV',
    clientId: '345678912',
    identificacion: '0801200023457',
    name: 'Sandra',
    lastName: 'Melisa',
    state: 'returned',
    sendServer: false,
  },
];

export default function CreditListPage({ navigation }) {
  const [creditList, setCreditList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para saber si estamos editando
  const [currentCreditId, setCurrentCreditId] = useState(null); // ID del crédito que se está editando
  const [newCredit, setNewCredit] = useState({
    name: '',
    lastName: '',
    identificacion: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const storedCredits = await getData('credit_list');
      if (storedCredits) {
        setCreditList(JSON.parse(storedCredits));
      } else {
        setCreditList(initialCreditList);
      }
    };
    fetchData();
  }, []);

  const saveCreditList = async (list) => {
    setCreditList(list);
    await storeData('credit_list', JSON.stringify(list));
  };

  const addNewCredit = () => {
    const newId = creditList.length ? creditList[creditList.length - 1].id + 1 : 1;
    const newCreditEntry = {
      createdAt: new Date().toISOString(),
      id: newId,
      hashId: `HASH_${newId}`,
      clientId: newCredit.identificacion,
      identificacion: newCredit.identificacion,
      name: newCredit.name,
      lastName: newCredit.lastName,
      state: 'new',
      sendServer: false,
    };
    const updatedList = [...creditList, newCreditEntry];
    saveCreditList(updatedList);
    resetModal();
  };

  const resetModal = () => {
    setNewCredit({ name: '', lastName: '', identificacion: '' });
    setIsModalVisible(false);
    setIsEditing(false);
    setCurrentCreditId(null);
  };

  const editCredit = (credit) => {
    setNewCredit({
      name: credit.name,
      lastName: credit.lastName,
      identificacion: credit.identificacion,
    });
    setCurrentCreditId(credit.id);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const updateCredit = () => {
    const updatedCredits = creditList.map((credit) =>
      credit.id === currentCreditId
        ? { ...credit, ...newCredit }
        : credit
    );
    saveCreditList(updatedCredits);
    resetModal();
  };

  const Chip = ({ children }) => {
    return (
      <View style={className('p-1 bg-purple-100 w-1/3 rounded-2xl')}>
        <Text style={className('text-gray-500 pl-2')}>{children}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={className('h-screen bg-gray-100 p-4 dark:bg-gray-900')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Listado de Créditos
      </Text>

      {/* Mapeo de la lista de créditos */}
      {creditList.map((item, index) => (
        <View key={index}>
          <View style={className('bg-white mb-3 p-3 rounded-lg shadow-sm dark:bg-gray-700')}>
            <View style={className('flex flex-col justify-between')}>
              <Text style={className('text-lg font-semibold text-gray-900 dark:text-white')}>
                {item?.name} {item?.lastName}
              </Text>
              <Text style={className('text-sm text-gray-500 dark:text-gray-400 mt-1')}>
                {item?.identificacion}
              </Text>
              <Text style={className('text-xs text-gray-400 dark:text-gray-300 mt-2')}>
                {new Date(item?.createdAt).toLocaleDateString()}
              </Text>
              <View style={className('mt-2')}>
                <Chip mode="outlined" style={className('bg-gray-200 dark:bg-gray-600')}>
                  {creditStates[item.state]}
                </Chip>
              </View>

              <View style={className('flex flex-wrap flex-row items-center mt-2')} >
                <TouchableOpacity onPress={() => editCredit(item)}
                  style={className('w-1/4 pr-2')}
                >
                  <View style={className('bg-red-50 p-2 rounded-lg')}>
                    <Text style={className('text-red-500 font-bold font-bold text-center')}>Eliminar</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={className('w-1/4 pr-2')}
                  onPress={() => editCredit(item)}>
                  <View style={className('bg-orange-100 p-2 rounded-lg')}>
                    <Text style={className('text-orange-600 font-bold text-center')}>Editar</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={className('w-1/2')}
                  onPress={() => navigation.navigate('CreditManagement', { credit: item })}>
                  <View style={className('bg-green-400 p-2 rounded-lg')}>
                    <Text style={className('text-white font-bold text-center')}>Ir</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Botón para editar */}
            </View>
          </View>

        </View>
      ))}

      {/* Botón para abrir modal */}
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={className('bg-green-500 p-3 rounded-lg')}>
          <Text style={className('text-white font-bold text-center')}>Agregar Nuevo Crédito</Text>
        </View>
      </TouchableOpacity>


      {/* Modal para agregar o editar un crédito */}
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={className('text-lg font-bold mb-4')}>
              {isEditing ? 'Editar Crédito' : 'Nuevo Crédito'}
            </Text>
            <TextInput
              style={className('bg-purple-50 p-2 rounded dark:bg-gray-700 mb-2 dark:text-white')}
              placeholder="Nombre"
              value={newCredit.name}
              onChangeText={(text) => setNewCredit({ ...newCredit, name: text })}
            />
            <TextInput
              placeholder="Apellido"
              value={newCredit.lastName}
              onChangeText={(text) => setNewCredit({ ...newCredit, lastName: text })}
              style={className('bg-purple-50 p-2 rounded dark:bg-gray-700 mb-2 dark:text-white')}
            />
            <TextInput
              placeholder="No. de Identificación"
              value={newCredit.identificacion}
              onChangeText={(text) => setNewCredit({ ...newCredit, identificacion: text })}
              style={className('bg-purple-50 p-2 rounded dark:bg-gray-700 mb-2 dark:text-white')}
              keyboardType="numeric"
            />
            <View style={className("flex flex-row flex-wrap w-full mt-2")}>
              <TouchableOpacity style={className("w-1/2 pr-2")} onPress={resetModal}>
                <View style={className('bg-red-500 p-3 rounded-lg')}>
                  <Text style={className('text-white font-bold text-center')}>Cancelar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={className("w-1/2 ")} onPress={isEditing ? updateCredit : addNewCredit}>
                <View style={className('bg-blue-400 p-3 rounded-lg ')}>
                  <Text style={className('text-white font-bold text-center')}>{isEditing ? "Actualizar" : "Guardar"}</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>

      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  chipContainer: {
    marginTop: 8,
  },
});
