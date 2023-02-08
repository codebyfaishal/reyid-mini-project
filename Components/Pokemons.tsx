//Pokemons.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

import {Button, Actionsheet, useDisclose} from 'native-base';
import {connect} from 'react-redux';
import {getPokemonsRequest} from '../actions/pokemons';

const Pokemons = props => {
  const {getPokemonsRequest, pokemons, loading, navigation} = props;
  const {isOpen, onOpen, onClose} = useDisclose();
  // console.log('props', props)
  const [selectedId, setSelectedId] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log('isModalVisible', isModalVisible);
  console.log('setIsModalVisible', setIsModalVisible);

  useEffect(() => {
    getPokemonsRequest();
  }, [getPokemonsRequest]);

  // Condition when Fetch
  if (props.pokemons.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#26D27F" />
      </View>
    );
  }

  //Handle Button
  const handleDecline = () =>
    setIsModalVisible(() => props.navigation.navigate('Pokemons Detail'));
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  //buat komponen item
  const Item = ({name, onPress}) => (
    <TouchableOpacity onPress={handleModal} style={styles.card}>
      <Image
        style={styles.thumb}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  //render komponen item
  const renderItem = ({item}) => {
    return <Item name={item.name} onPress={() => setSelectedId(item.name)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons.items}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        extraData={selectedId}
      />
      <Actionsheet isOpen={isModalVisible} disableOverlay={true}>
        <Actionsheet.Content>
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
          <Button onPress={handleDecline} colorScheme="emerald">
            More Detail
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default connect(({pokemons}) => ({pokemons}), {
  getPokemonsRequest,
})(Pokemons);

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
});
