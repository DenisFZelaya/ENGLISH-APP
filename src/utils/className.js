// import tw from 'tailwind-react-native-classnames';
import tw from 'twrnc';

export function className(classes) {
    // Pasamos las clases finales a tw para obtener los estilos
    return tw`${classes}`;
}
