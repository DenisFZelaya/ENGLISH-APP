import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Almacena un valor en AsyncStorage.
 * @param {string} key - La clave para almacenar el valor.
 * @param {string} value - El valor a almacenar.
 */
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(key + 'Datos almacenados exitosamente');
  } catch (e) {
    console.error('Error al almacenar los datos', e);
  }
};

/**
 * Recupera un valor de AsyncStorage.
 * @param {string} key - La clave del valor a recuperar.
 * @returns {string|null} - El valor almacenado o null si no existe.
 */
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(key + '-Datos recuperados:', value);
      return value;
    } else {
      console.log('No se encontraron datos para la clave:', key);
      return null;
    }
  } catch (e) {
    console.error('Error al recuperar los datos', e);
    return null;
  }
};

/**
 * Elimina un valor de AsyncStorage.
 * @param {string} key - La clave del valor a eliminar.
 */
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(key + 'Datos eliminados exitosamente');
  } catch (e) {
    console.error('Error al eliminar los datos', e);
  }
};
