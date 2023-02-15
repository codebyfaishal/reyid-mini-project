//Pokemons.js
import React, {useState, useEffect, useRef, useMemo} from 'react';
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
  FlatList,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {getPokemonsRequest} from '../../actions/pokemons';

//Component & Style
import Pagination from '@cherry-soft/react-native-basic-pagination';
import styles from './PokemonsStyle';
import {Button, Actionsheet, useDisclose} from 'native-base';
// import LoadingComponent from '../LoadingComponent';

const Pokemons = props => {
  const {getPokemonsRequest, pokemons, loading, navigation} = props;
  const {isOpen, onOpen, onClose} = useDisclose();
  const [selectedId, setSelectedId] = useState();
  console.log("selectedId", selectedId)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPokemonsRequest();
  }, []);

  //Handle Bottom Modal
  // const handleMoreDetail = () =>
  //   setIsModalVisible(() => props.navigation.navigate('Pokemons Detail'));
  const handleMoreDetail = () => {
    props.navigation.navigate('Pokemons Detail');
    setIsModalVisible(false);
    onClose();
  };
    const handleModal = () => {
      const newIsModalVisible = !isModalVisible;
      setIsModalVisible(() => newIsModalVisible);
      onOpen(newIsModalVisible);
    };

    const handleClose = () => {
      onClose();
      setIsModalVisible(false);
  }


  // LOGIC PAGING FOOTER
  let pageSize = 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return pokemons.items.slice(firstPageIndex, lastPageIndex);
  }, [page]);

  console.log('currentTableData', currentTableData);

  // Back to Top
  const scrollRef = useRef();

  const handlePageChange = page => {
    setPage(page);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  //show alert if no Data
  const showAlert = () =>
    Alert.alert(
      pokemons.message,
      'My Alert Msg', // <- this part is optional, you can pass an empty string
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

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
    return showAlert();
  }

  // KOMPONEN PAGING FOOTER
  const ListPagingFooter = () => {
    //View to set in Footer
    return (
      <Pagination
        totalItems={props.pokemons.items.length} //oke totalCount
        pageSize={pageSize} //oke pageSize
        currentPage={page} //oke currentPage
        // onPageChange={setPage}//oke onPageChange
        onPageChange={handlePageChange}
        pagesToDisplay={4}
        showLastPagesButtons
      />
    );
  };

  // FUNCTION PAKE FLATLIST, KEKURANNYA PAGING BLM SESUAI.
  // START

  //buat komponen item
  // const Item = ({name, onPress}) => (
  //   <TouchableOpacity onPress={handleModal} style={styles.card}>
  //     <Image
  //       style={styles.thumb}
  //       source={{
  //         uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
  //       }}
  //     />
  //     <View style={styles.infoContainer}>
  //       <Text style={styles.name}>{name}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  // //render komponen item
  // const renderItem = ({item}) => {
  //   return <Item name={item.name} onPress={() => setSelectedId(item.name)} />;
  // };

  // //handle pull to refresh
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, [getPokemonsRequest]);

  // END

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView ref={scrollRef}>
        {currentTableData.map(item => {
          return (
            <TouchableOpacity
              key={item.name}
              onPress={handleModal => {
                const newIsModalVisible = !isModalVisible;
                setIsModalVisible(() => newIsModalVisible);
                onOpen(newIsModalVisible);
                // do something with handleModal
                setSelectedId(item.name);
              }}
              style={styles.card}>
              <Image
                style={styles.thumb}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
                }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ListPagingFooter />
      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <Actionsheet.Content>
          <Text style={styles.nameTitleModal}>{selectedId}</Text>
          <Image
            style={styles.thumb}
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${selectedId}.png`,
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
