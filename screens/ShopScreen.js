import { Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { ImageBackground } from 'react-native';
import axios from '../utils'


const Shop = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [DATA, setData] = React.useState(false)
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });
    // const DATA = [
    //     {
    //         id: "1",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product1.png")
    //     },
    //     {
    //         id: "2",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product2.png")
    //     },
    //     {
    //         id: "3",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product3.png")
    //     },
    //     {
    //         id: "4",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product4.png")
    //     },
    //     {
    //         id: "5",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product5.png")
    //     },
    //     {
    //         id: "6",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product6.png")
    //     },
    //     {
    //         id: "7",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product7.png")
    //     },
    //     {
    //         id: "8",
    //         name: "Hair Gel",
    //         price: "90",
    //         star: "4.8",
    //         image: require("../assets/product8.png")
    //     }

    // ]

    const loadData = () => {
        setLoading(true)
        axios.get("/product?store=barbar")
        .then(response =>  {
            if(response.status == 200){
                // console.log(response.data.products)
                setData(response.data.products)
            }
        })
        .catch(console.log)
        .finally(() => setLoading(false))
    }

    const onRefresh = () => {
        setRefreshing(true)
        loadData()
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }
        
        React.useEffect(() => {
            loadData()
        }, [])

    const Item = ({item}) => {
        return (
            <TouchableOpacity activeOpacity={1} style={{width: "47%"}} onPress={() => navigation.navigate('Product', {product_id: item.id})}>
                <View>
                    <ImageBackground 
                        resizeMode='cover'
                        imageStyle={{
                            borderRadius: 8
                        }}
                        style={{
                            flex: 1,
                            height: 157,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 7,
                        }}
                        source={{uri: 'https://digitalplutform.com/trimme/public/images/' + item.thumbnail}}
                    >
                            <Text style={{
                                fontFamily: 'Poppins_500Medium',
                                fontSize: 18,
                            }}>{item.name}</Text>

                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: 40, paddingHorizontal: 10, paddingVertical: 8}}>
                            <Text style={{fontSize: 18, fontFamily: "Poppins_500Medium"}}>$ {item.selling_price}</Text>
                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                <AntDesign name="star" size={15} color="#F9B53F" style={{marginTop: 3, marginRight: 4}} /> 
                                <Text style={{fontSize: 18, fontFamily: "Poppins_500Medium"}}>{item.star}</Text>
                            </View>
                        </View>  
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >    */}
                {/* <Text style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 26,
                    marginVertical: 20
                }}>Hair products</Text> */}

                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    ItemSeparatorComponent={<View style={{marginBottom: 21}}></View>}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />

            {/* </ScrollView> */}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14
  },
})

export default Shop