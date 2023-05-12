import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import Pokemons from './Components/Pokemon/Pokemons';
import welcomeScreen from './Components/WelcomePage/welcomeScreen';
import PokemonsDetail from './Components/Pokemon/PokemonsDetail';

const Stack = createStackNavigator();







export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={welcomeScreen} />
      <Stack.Screen name="  " component={Pokemons} options={{ 
      headerLeft: (props) => ( // App Logo
      <Image
        style={{ width: 100, height: 40 }}
        source={require('./Components/assets/catLogo.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} />
      <Stack.Screen name="Pokemons Detail" component={PokemonsDetail} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });