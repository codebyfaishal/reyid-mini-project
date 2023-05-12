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
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import {getPokemonsRequest} from '../../actions/pokemons';

//Component & Style
import Pagination from '@cherry-soft/react-native-basic-pagination';
import styles from './PokemonsStyle';
import {Button, Actionsheet, useDisclose} from 'native-base';
import StarRating from 'react-native-star-rating-widget';
// import LoadingComponent from '../LoadingComponent';

//custom hooks
import useFetchDetails from '../useFetchDetails';

const Pokemons = props => {
  const {getPokemonsRequest, pokemons, navigation} = props;
  const {isOpen, onOpen, onClose} = useDisclose();
  const [selectedId, setSelectedId] = useState();
  console.log('selectedId', selectedId)
  const [selectedName, setSelectedName] = useState();
  const [selectedDescription, setSelectedDescription] = useState();
  const [selectedTemp, setSelectedTemp] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const[selectedAdap, setSelectedAdap] = useState();
  const[selectedAffect, setSelectedAffect] = useState();
  const[selectedChild, setSelectedChild] = useState();
  const[selectedDog, setSelectedDog] = useState();
  const [rating, setRating] = useState(0);
  const [searchfeild, setSearchfeild] = useState('');
  console.log('selectedName', selectedName)
  // console.log("PrOPS", props.pokemons.itemsDetail.itemsDetail.abilities[0].ability.name)
  console.log("PROPS", props)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const { itemsDetail, loadingDetail, errorDetail } = useFetchDetails(selectedId);
  console.log('itemsDetail', itemsDetail)
  // console.log('get image', props.pokemons.itemsDetail.itemsDetail[0].url)


  useEffect(() => {
    getPokemonsRequest();
  }, []);

  // useEffect(() => {
  //   useFetchDetails();
  // }, []);

  //Handle Bottom Modal
  // const handleMoreDetail = () =>
  //   setIsModalVisible(() => props.navigation.navigate('Pokemons Detail'));
  const handleMoreDetail = () => {
    props.navigation.navigate('Pokemons Detail', {selectedId: selectedId, selectedName: selectedName});
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

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (page - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return pokemons.items.slice(firstPageIndex, lastPageIndex);
  // }, [page]);

  // console.log('currentTableData', currentTableData);

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




  return (
    <SafeAreaView style={{flex: 1}}>
         <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfield}
          placeholder="Search Cat"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView ref={scrollRef}>
        
        {pokemons.items
  .filter(item =>
    item.name.toLowerCase().includes(searchfeild.toLowerCase())
  )
  .map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={handleModal => {
                const newIsModalVisible = !isModalVisible;
                setIsModalVisible(() => newIsModalVisible);
                onOpen(newIsModalVisible);
                // do something with handleModal
                setSelectedId(item.id);
                setSelectedName(item.name)
                setSelectedDescription(item.description)
                setSelectedTemp(item.temperament)
                setSelectedAdap(item.adaptability)
                setSelectedAffect(item.affection_level)
                setSelectedChild(item.child_friendly)
                setSelectedDog(item.dog_friendly)
              }}
              style={styles.card}>
              {/* <Image
                style={styles.thumb}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
                }}
              /> */}
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* <ListPagingFooter /> */}
      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <Actionsheet.Content>
          <Text style={styles.nameTitleModal}>{selectedName}</Text>
          <Text style={styles.nameDescription}>{selectedDescription}</Text>
          <Text style={styles.divider}>{"---"}</Text>
          <Text style={styles.nameDescription}>{selectedTemp}</Text>
          <Image
            style={styles.thumb}
            // source={{ uri: props.pokemons ? props.pokemons.itemsDetail.itemsDetail[0].url : props.pokemons.itemsDetail.itemsDetail[0].url }}
          />
          <Text style={styles.nameDescription}>
            {'Affection Level :'}    <StarRating
        rating={selectedAffect}
        onChange={setRating}
      />
          </Text>
          <Text style={styles.nameDescription}>
            {'Adaptability :'}    <StarRating
        rating={selectedAdap}
        onChange={setRating}
      />
          </Text>
          <Text style={styles.nameDescription}>
            {'Child Friendly :'}    <StarRating
        rating={selectedChild}
        onChange={setRating}
      />
          </Text>
          <Text style={styles.nameDescription}>
            {'Dog Friendly :'} 
            <StarRating
            // style={{marginLeft: 10,}}
        rating={selectedDog}
        onChange={setRating}
      />
          </Text>
       
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default connect(({pokemons}) => ({pokemons}), {
  getPokemonsRequest,
})(Pokemons);
