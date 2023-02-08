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

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
    height: 350,
    marginHorizontal: 50,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  nameTitleModal: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    // width: '50%'
  },
  nameDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: 25,
    marginBottom: 6,
    // minWidth: '48%',
    textAlign: 'center',
  },
  nameValue: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  item: {
    width: '50%', // is 50% of container width
  },

  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  thumbOther: {
    height: 100,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    width: 100,
  },
  thumbEvo: {
    height: 200,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    width: 200,
  },
  circleView: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    lineHeight: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});
