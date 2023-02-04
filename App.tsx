import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NativeBaseProvider } from 'native-base';

import Pokemons from './Components/Pokemons';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          marginHorizontal: 7,
          paddingBottom: 10,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 0,
          shadowRadius: 0,
          
        },
        indicatorStyle: {
          backgroundColor: 'darkgreen',
          marginBottom: 5,
          width: '5%',
          marginLeft: '10%',
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: 'darkgreen',
        inactiveTintColor: 'grey'
      }}>
      <Tab.Screen name="All" component={Pokemons} />
      <Tab.Screen name="Food" component={Pokemons} />
      <Tab.Screen name="Movies" component={Pokemons} />
      <Tab.Screen name="Shop" component={Pokemons} />
      <Tab.Screen name="Travel" component={Pokemons} />
      {/* <Tab.Screen name="Items" component={Pokemons} /> */}
    </Tab.Navigator>
  );
};




export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'black',
            },
            
            headerRight: () =>  <View style={styles.headerRight}>
            <TouchableOpacity>
            {/* <Image
        source={require('./Components/assets/IconToogle.png')}
      /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              // onPress={playgroundNavigate}
            >
              {/* <Image
        source={require('./Components/assets/Profile.png')}
      /> */}
            </TouchableOpacity>
          </View>,
         
          })}
        />
        <Stack.Screen
          name=" "
          component={Pokemons}
        />
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