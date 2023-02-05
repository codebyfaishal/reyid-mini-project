// Aboutscreen.js
import React, { Component } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
export default function PokemonsDetail() {
  return (
    <View>
         <Text style={styles.nameTitleModal}>{"POKEMON NAME"}</Text>
           <Image
                                  style={styles.thumb}
                                  source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png` }}
                                />
                                <Text style={styles.nameDescription}>{"Weight :"}    {"69"}</Text>
                                <Text style={styles.nameDescription}>{" Height :"}   {"7"}</Text>
                                <Text style={styles.nameDescription}>{"Abilities :"}  {"overgrow"}</Text>
                                <Text style={styles.nameDescription}>{"Type:"} </Text>
                                <Text style={styles.nameDescription}>{"Others Image:"} </Text>
    </View>
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