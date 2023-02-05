import * as React from 'react';
import {  View, Text, Image, StyleSheet} from 'react-native';
import { Button } from "native-base";
import { color } from 'native-base/lib/typescript/theme/styled-system';

function welcomeScreen({ navigation }) {
  return (
    <View >
      {/* <Text>Home Screen</Text>
      <Button
        title="Go to Pokemons"
        onPress={() => navigation.navigate('Pokemons')}
      /> */}
              <Image
                                  style={styles.thumb}
                                  source={require('./assets/welcomeImage.png')}
                                />
                                <Text style={styles.title}>All the Pokémon data you'll ever need in one place!</Text>
                                <Text style={styles.title2}>Thousand of data compiled into one place</Text>
                                <Button onPress={() => navigation.navigate('  ')} style={styles.button} colorScheme="emerald">
            Check Pokèdex
          </Button>
    </View>
  );
}

const styles = StyleSheet.create({
 
    
      thumb: {
        height: 400,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
      },
      title: {
        fontSize: 42,
        fontWeight: 'bold',
        marginHorizontal: 25,
      },
      title2: {
        fontSize: 20,
        color: 'gray',
        marginHorizontal: 25,
        marginVertical: 10
      },
      button: {
        marginHorizontal: 25,
        marginVertical: 10,  
        width: '50%'  
      }
  
});

export default welcomeScreen;