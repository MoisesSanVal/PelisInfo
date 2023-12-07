import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FavoritosScreen from '../Screens/FavoritosScreen';
import StackNavigator1 from './StackNavegator';
import { Firebase_Auth } from '../Settings/firebase-config';
import { signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el icono que desees utilizar

const Drawer = createDrawerNavigator();

const LogoutScreen = () => {
  useEffect(() => {
    const handleLogout = async () => {
      await signOut(Firebase_Auth);
    };

    handleLogout(); // Llama a handleLogout al cargar la pantalla
  }, []);

  return (
    <View>
    </View>
  );
};

const DrawerNavigator1 = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#872341',
          inactiveTintColor: '#be3144',
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
        drawerStyle={{
          backgroundColor: '#22092c',
        }}
      >
        <Drawer.Screen
          name="Series y películas"
          component={StackNavigator1}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'film' : 'film-outline'} // Cambia los nombres de los iconos según los que quieras utilizar
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Tus Favoritos"
          component={props => <FavoritosScreen {...props} />}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'heart' : 'heart-outline'} // Cambia los nombres de los iconos según los que quieras utilizar
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? 'exit' : 'exit-outline'} // Cambia los nombres de los iconos según los que quieras utilizar
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator1;
