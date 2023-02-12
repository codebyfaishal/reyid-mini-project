// Aboutscreen.js
import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

//Component & styles
import styles from './PokemonsStyle';

export default function PokemonsDetail() {
  return (
    <ScrollView>
      <Text style={styles.nameTitleModal}>{'bulbasaur'}</Text>
      <Image
        style={styles.thumb}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
        }}
      />
      <Text style={styles.nameDescription}>
        {'Weight :'} {'69'}
      </Text>
      <Text style={styles.nameDescription}>
        {'Height :'} {'7'}
      </Text>
      <Text style={styles.nameDescription}>
        {'Abilities :'} {'overgrow'}
      </Text>
      <Text style={styles.nameDescription}>{'Type:'} </Text>
      <Text style={styles.nameDescription}>{'Other Images:'} </Text>

      <View style={styles.row}>
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
        <Image
          style={styles.thumbOther}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
          }}
        />
      </View>

      {/* //STATS */}
      <Text style={styles.nameDescription}>{'Stats:'} </Text>
      <View style={styles.row}>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#FBC02D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#F8BBD0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#689F38',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#f00',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#1E88E5',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: '#9575CD',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}
          //   underlayColor = '#ccc'
        >
          <Text> 67 </Text>
          <Text> Stat 1 </Text>
        </View>
      </View>

      {/* // EVOLUTIONS */}
      <Text style={styles.nameDescription}>{'Evolution:'} </Text>
      <View style={styles.row}>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 150,
            height: 150,
            borderWidth: 5,
            borderColor: '#FBC02D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={styles.thumbEvo}
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
            }}
          />
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 150,
            height: 150,
            borderWidth: 5,
            borderColor: '#F8BBD0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={styles.thumbEvo}
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
            }}
          />
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 150,
            height: 150,
            borderWidth: 5,
            borderColor: '#689F38',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            style={styles.thumbEvo}
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
            }}
          />
        </View>
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: 150,
            height: 150,
            borderWidth: 5,
            borderColor: '#f00',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            style={styles.thumbEvo}
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png`,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}


