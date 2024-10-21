
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import NoAuthStackNav from './src/screens/NoAuth/NoAuthStackNav';
import tw, { useDeviceContext } from 'twrnc';

function App(): JSX.Element {
  useDeviceContext(tw, {
    // 1️⃣  opt OUT of listening to DEVICE color scheme events
    observeDeviceColorSchemeChanges: false,
    // 2️⃣  and supply an initial color scheme
    initialColorScheme: `device`, // 'light' | 'dark' | 'device'
  });
  const isAuth = true

  return (
    <NavigationContainer>
      {
        isAuth ? <DrawerNavigation /> : <NoAuthStackNav />
      }
    </NavigationContainer>
  );
}
export default App;
