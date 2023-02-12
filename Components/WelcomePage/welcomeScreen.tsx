import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

//Component & styles
import {Button} from 'native-base';
import styles from './welcomeScreenStyle';

function welcomeScreen({navigation}) {
  return (
    <View>
      <Image
        style={styles.thumb}
        source={require('../assets/welcomeImage.png')}
      />
      <Text style={styles.title}>
        All the Pokémon data you'll ever need in one place!
      </Text>
      <Text style={styles.title2}>
        Thousand of data compiled into one place
      </Text>
      <Button
        onPress={() => navigation.navigate('  ')}
        style={styles.button}
        colorScheme="emerald">
        Check Pokèdex
      </Button>
    </View>
  );
}


export default welcomeScreen;
