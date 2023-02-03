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
} from 'react-native';
import axios from 'axios';
import { Button } from "native-base";

const Pokemons = props => {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCoupons();
    }, []);



    // Fetch Index
    const fetchCoupons = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios.get('https://user1673281842743.requestly.dev/getCoupon');
            setCoupons(response.result);
        } catch (error) {
            //   console.error(error.message);
        }
        setLoading(false);
    }


    // Condition when Fetch
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#26D27F" />
            </View>
        );
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
                {/* <View style={styles.container}> */}

                    {coupons
                        .map((coupon, index) => {
                            return (


                                <TouchableOpacity style={styles.card}>
                                <Image
                                  style={styles.thumb}
                                  source={{ uri: coupon.couponBrandLogo }}
                                />
                                <View style={styles.infoContainer}>
                                  <Text style={styles.name}>{"POKE NAME"}</Text>
                                </View>
                              </TouchableOpacity>
                            );
                        })}
                {/* </View> */}
            </ScrollView>
        </View>
    );
};

export default Pokemons;

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