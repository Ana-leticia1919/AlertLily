import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilList from '../pages/perfil/container/perfil-list';
import BluetoothList from '../pages/bluetooth/container/bluetooth-list';
import MapaList from '../pages/mapa/container/mapa-list';
import ContatosList from '../pages/contatos/container/contatos-list';

const Tab = createBottomTabNavigator();

 function NavBarBottom() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Bluetooth" component={BluetoothList} />
        <Tab.Screen name="Contatos" component={ContatosList} />
        <Tab.Screen name="Mapa" component={MapaList} />
        <Tab.Screen name="Perfil" component={PerfilList} />
      </Tab.Navigator>
  );
}

export default NavBarBottom;