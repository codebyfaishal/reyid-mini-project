import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({

    //Index
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

    // Details
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

  export default styles;
  