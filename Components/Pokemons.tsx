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

    const { getPokemonsRequest, pokemons } = props;
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
    console.log('props', props)

    useEffect(() => {
      getPokemonsRequest();
    }, [getPokemonsRequest]);


   

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
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        </Actionsheet.Content>
      </Actionsheet>
 
                </View>
            </ScrollView>
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
    //style
    // card: {
    //     backgroundColor: 'white',
    //     borderRadius: 16,
    //     shadowOpacity: 0.2,
    //     shadowRadius: 4,
    //     shadowColor: 'black',
    //     shadowOffset: {
    //         height: 0,
    //         width: 0,
    //     },
    //     elevation: 1,
    //     marginVertical: 13,
    //     flexDirection: 'row',
    //     marginHorizontal: 30,
    //     // width: 350,
    //     height: 450,
    // },
    // thumb: {
    // //     borderTopLeftRadius: 16,
    // //     borderBottomLeftRadius: 16,
    // //     width: '40%',
    // height: 260,
    // borderTopLeftRadius: 46,
    // borderTopRightRadius: 46,
    // width: '100%',
    // },
    // infoContainer: {
    //     padding: 16,
    // },
    // name: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     // alignItems: 'flex-start',
    //     // justifyContent: 'center'
    // },
    // discount: {
    //     fontSize: 25,
    //     fontWeight: 'bold',
    //     marginTop: 15,
    //     alignItems: 'flex-start',
    //     justifyContent: 'center',
    //     color: '#26D27F'

    // },
    // tukarkan: {
    //     fontSize: 12,
    //     fontWeight: 'bold',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     color: 'white'

    // },

    // header: {
    //     fontSize: 26,
    //     fontWeight: 'bold',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     color: 'black'

    // },
    // promo: {
    //     fontSize: 10,
    //     fontWeight: 'bold',
    //     marginTop: 15,
    //     alignItems: 'flex-start',
    //     justifyContent: 'center',
    //     color: '#868788'
    // },
    // price: {
    //     fontSize: 16,
    //     fontWeight: '600',
    //     marginBottom: 8,
    // },

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
      price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },
});