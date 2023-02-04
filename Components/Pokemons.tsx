//Pokemons.js
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native';
import axios from 'axios';
import { Button, Actionsheet, useDisclose } from "native-base";
import { connect } from 'react-redux';
import { getPokemonsRequest } from '../actions/pokemons';

const Pokemons = props => {

    const { getPokemonsRequest, pokemons, loading } = props;
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
    console.log('props', props)

    useEffect(() => {
      getPokemonsRequest();
    }, [getPokemonsRequest]);

      // Condition when Fetch
      if (props.pokemons.loading) {
        console.log('loading')
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#26D27F" />
            </View>
        );
    } else {
      console.log('nggak udaah ')
    }


   

    return (
        <View>
            <ScrollView>
                <View style={{
                    paddingVertical: 11,

                    width: '100%',
                    borderRadius: 3,
                    marginTop: 15,
                }}>
                </View>
                

                <View style={styles.container}>

                    {pokemons.items
                        .map((pokemon, index) => {
                            return (


                                <TouchableOpacity onPress={onOpen} key={index} style={styles.card}>
                                <Image
                                  style={styles.thumb}
                                  source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                                    pokemon.name
                                  }.png` }}
                                />
                                <View style={styles.infoContainer}>
                                <Text style={styles.name}>{pokemon.name}</Text>
                                  <Text style={styles.name}>{pokemon.name}</Text>
                                </View>
                              </TouchableOpacity>
                            );
                        })}
                </View>
            </ScrollView>

            {/* //modal bottom// */}
            <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
        <Text style={styles.nameTitleModal}>{"POKEMON NAME"}</Text>
        <Image
                                  style={styles.thumb}
                                  source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png` }}
                                />
                                <Text style={styles.nameDescription}>{"Weight :"}    {"9999"}</Text>
                                <Text style={styles.nameDescription}>{" Height :"} {"999"}</Text>
                                <Text style={styles.nameDescription}>{"Abilities :"} {"Abilities 1"}</Text>
                                <Text style={styles.nameDescription}>{"Type:"}</Text>
                                <Button onPress={() => navigation.navigate('Pokemons')} colorScheme="emerald">More Detail</Button>
                                
        </Actionsheet.Content>
        
      </Actionsheet>
      </View>
    );
};

// export default Pokemons;

export default connect(
    ({ pokemons }) => ({ pokemons }),
    {
      getPokemonsRequest
    }
  )(Pokemons);



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
        height: 450,
        marginHorizontal: 50
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
        marginHorizontal: 15,
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
        width: '50%' // is 50% of container width
      },
});