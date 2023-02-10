//Pokemons.js
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  RefreshControl,
  FlatList
} from 'react-native';

import {Button, Actionsheet, useDisclose} from 'native-base';
import {connect} from 'react-redux';
import {getPokemonsRequest} from '../actions/pokemons';
import Pagination from '@cherry-soft/react-native-basic-pagination';
import LoadingComponent from './LoadingComponent';

const Pokemons = props => {
  const {getPokemonsRequest, pokemons, loading, navigation} = props;
  const {isOpen, onOpen, onClose} = useDisclose();
  console.log("PROPS", props)
  const [selectedId, setSelectedId] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  console.log(page)


  //show alert if no Data
  const showAlert = () =>
Alert.alert(
  (pokemons.message),
  'My Alert Msg', // <- this part is optional, you can pass an empty string
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);


//handle pull to refresh
const onRefresh = useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, [getPokemonsRequest]);


  useEffect(() => {
    getPokemonsRequest();
  }, []);

  // condition when loading show indicator
  if (props.pokemons.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#26D27F" />
    </View>
      // <LoadingComponent/>
    );
  }

  // implement show alert
  if (props.pokemons.showError) {
    return (
   showAlert()
    );
  }


  // grouping item when fetch, become newarray contains 100
  const pokemon = [...pokemons.items];
  for (let i = 0; i < 1000; i++) {
    pokemon.push([i]);
  }
  
  let subArrays = [];
  let subArrayCount = 0;
  for (let i = 0; i < pokemon.length; i++) {
    if (i % 100 === 0) {
      subArrays[subArrayCount] = [];
      subArrayCount++;
    }
    subArrays[subArrayCount - 1].push(pokemon[i]);
  }
  
  const newArray = subArrays;
  console.log('newArray', newArray)




//function for prev and next page 
function pagePrevNext() {
  if (page === 1) {
    return newArray[0];
  } else if (page === 2) {
    return newArray[1];
  } else if (page === 3) {
    return newArray[2];
  } else if (page === 9) {
    return newArray[8];
  } else if (page === 4) {
    return newArray[3];
  } else if (page === 5) {
    return newArray[4];
  } else if (page === 6) {
    return newArray[5];
  } else if (page === 7) {
    return newArray[6];
  } else if (page === 8) {
    return newArray[7];
  } else {
    console.log("NYASAR LU");
  }
}

  

  //Handle Bottom Modal
  const handleMoreDetail = () =>
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

  // render next or prev page component
  const ListFooter = () => {
    //View to set in Footer
    return (
      <Pagination
      totalItems={props.pokemons.items.length}
      pageSize={100}
      currentPage={page}
      onPageChange={setPage}
      pagesToDisplay={4}
      showLastPagesButtons
    />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, marginVertical: -30}}>
      <FlatList
        data={pagePrevNext()}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        extraData={selectedId}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <ListFooter></ListFooter>
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
          <Button onPress={handleMoreDetail} colorScheme="emerald">
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
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});
