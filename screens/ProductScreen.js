import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { Image } from 'react-native';
import axios from '../utils'


const Product = ({route, navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [product, setProduct] = React.useState(false)

    const {product_id} = route.params

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const loadData = () => {
        setLoading(true)
        axios.get(`/product/${product_id}`)
        .then(response =>  {
            if(response.status == 200){
                console.log(response.data.product)
                setProduct(response.data.product)
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

    const addToCart = () => {
        axios.post(`/cart`, {product_id: product.id})
        .then(response =>  {
            if(response.status == 200){
                alert(`${product.name} added to the cart`)
                navigation.navigate("Cart")
            }
        })
        .catch((error)=> alert("Something went wrong !!!"))
        .finally(() => setLoading(false))
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Image 
                    style={{
                        height: 200,
                        borderRadius: 8
                    }}
                    resizeMode='cover'
                    source={{uri: 'https://digitalplutform.com/trimme/public/images/' + product.thumbnail}}
                />

                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={{uri: 'https://digitalplutform.com/trimme/public/images/' + product.thumbnail}}
                    />

                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={{uri: 'https://digitalplutform.com/trimme/public/images/' + product.image_1}}
                    />


                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={{uri: 'https://digitalplutform.com/trimme/public/images/' + product.image_2}}
                    />
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                    <View>
                        <Text style={{fontSize: 22, fontFamily: "Poppins_500Medium"}}>{product.name}</Text>
                        <View style={{flexDirection: "row"}}>
                            <AntDesign name="star" size={15} color="#F9B53F" style={{marginTop: 3, marginRight: 4}} /> 
                            <Text style={{fontSize: 18, fontFamily: "Poppins_500Medium"}}>4.8</Text>
                        </View>
                    </View>
                    
                    <Text style={{fontSize: 22, fontFamily: "Poppins_500Medium"}}>${product.selling_price}</Text>
                </View>

                <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => addToCart()}>Add to cart</Button>
                <Button buttonStyle={styles.secondaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => send()}>Buy now</Button>

                
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 25, fontFamily: "Poppins_500Medium"}}>About product</Text>
                    <Text style={{fontSize: 15, fontFamily: "Poppins_500Medium", color: "#575757"}}>{product.short_description}</Text>

                    <Text style={{fontSize: 25, fontFamily: "Poppins_500Medium"}}>Product descriptions</Text>
                    <Text style={{fontSize: 15, fontFamily: "Poppins_500Medium", color: "#575757"}}>{product.long_description}</Text>
                </View>

            </ScrollView>   
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 10
  },
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447",
    marginTop: 28,
    marginBottom: 10
  },
  secondaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#263238",
    marginBottom: 35
  }
})

export default Product