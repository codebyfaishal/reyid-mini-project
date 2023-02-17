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
import useFetchDetails from '../useFetchDetails';
import { connect } from 'react-redux';

const PokemonsDetail = props => {
  const {pokemons, navigation, route} = props;
  const { itemId, selectedName, selectedId } = route.params;
  console.log("selectedName DETAIL PAGE", selectedName)
  console.log("selectedID DETAIL PAGE", selectedId)
  console.log("PROPS DETAIL", props)
  const { itemsDetail, loadingDetail, errorDetail } = useFetchDetails(selectedId);
  
  return (
    <ScrollView>
      <Text style={styles.nameTitleModal}>{selectedName}</Text>
      <Image
        style={styles.thumb}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${selectedName}.png`,
        }}
      />
      <Text style={styles.nameDescription}>
      {'Weight :'} {props.pokemons.itemsDetail.itemsDetail?.weight}
      </Text>
      <Text style={styles.nameDescription}>
      {'Height :'} {props.pokemons.itemsDetail.itemsDetail?.height}
      </Text>
      <Text style={styles.nameDescription}>
      {'Abilities :'} {props.pokemons.itemsDetail.itemsDetail?.abilities[0].ability.name}
      </Text>
      <Text style={styles.nameDescription}>{'Type:'} {props.pokemons.itemsDetail.itemsDetail?.types[0].type.name} </Text>
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
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[0].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[0].stat.name} </Text>
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
                   <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[1].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[1].stat.name} </Text>
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
           <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[2].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[2].stat.name} </Text>
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
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[3].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[3].stat.name} </Text>
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
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[4].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[4].stat.name} </Text>
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
             <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[5].base_stat} </Text>
          <Text> {props.pokemons.itemsDetail.itemsDetail?.stats[5].stat.name} </Text>
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

export default connect(({pokemons}) => ({pokemons}), {
  // getPokemonsRequest,
})(PokemonsDetail);


