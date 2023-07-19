import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from '../utils'
import { FlatList } from 'react-native';


const Cart = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [items, setItems] = React.useState([])

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const product = {
        id: "1",
        name: "Hair Gel",
        price: "90",
        star: "4.8",
        thumbnail: require("../assets/thumbnail.png"),
        images: [
            require("../assets/product1.png"),
            require("../assets/product1.png"),
            require("../assets/product1.png")
        ]
    }

    const loadData = () => {
        setLoading(true)

        axios.get("/cart")
        .then(response =>  {
            if(response.status == 200){
                console.log(response.data.items)
                setItems(response.data.items)
            }
        })
        .catch((error) => console.log(error.response.data))
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

    const changeQuantity = (id, operation) => {
        console.log(operation)

        axios.put(`/cart/${id}`, {operation})
        .then(response =>  {
            if(response.status == 200){
                loadData()
            }
        })
        .catch((error) => console.log(error.response.data))
        .finally(() => setLoading(false))
    }

    const removeItem = (id) => {
        axios.delete(`/cart/${id}`)
        .then(response =>  {
            if(response.status == 200){
                loadData()
            }
        })
        .catch((error) => console.log(error.response.data))
        .finally(() => setLoading(false))
    }

    const Item = ({item}) => {
        return (
            <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: "center"}}>
                    <Image 
                        style={{
                            width: 80,
                            height: 60,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={{uri: 'https://digitalplutform.com/trimme/public/images/' + item.thumbnail}}
                    />

                    <View style={{marginLeft: 10}}>
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18}}>{item.name}</Text>
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16, color: "#6C6C6C"}}>Quantity {item.quantity}</Text>
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16}}>${item.selling_price}</Text>
                    </View>
                </View>

                <View style={{marginLeft: 10, flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <View>
                        <Entypo name="cross" size={20} color="black"  onPress={()=> removeItem(item.item_id)}  />
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                        <Entypo name="circle-with-plus" size={24} color="#D9D9D9" onPress={()=>changeQuantity(item.item_id, "+")} />
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, marginHorizontal: 5}}>{item.quantity}</Text>
                        <MaterialCommunityIcons name="minus-circle" size={24} color="#D9D9D9" onPress={()=>changeQuantity(item.item_id, "-")} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={items}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.item_id}
            />

            <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => navigation.navigate("Bill")}>Check Out</Button>
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

export default Cart