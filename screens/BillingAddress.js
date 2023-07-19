import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView, TextInput } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import axios from '../utils'


const Bill = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
   
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [zip, setZip] = React.useState("")

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });


    const loadData = () => {
        setLoading(true)
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

    const placeOrder = () => {

        if(name == "") {
            alert("Enter your name")
            return;
        }
        if(phone == "") {
            alert("Enter your Phone")
            return;
        }
        if(address == "") {
            alert("Enter your Address")
            return;
        }
        if(zip == "") {
            alert("Enter your ZIP Code")
            return;
        }
       

        setIsSubmitting(true)
        axios.post("/order", {name, phone, address, zip})
        .then(response =>  {
            if(response.status == 200){
                setIsSubmitting(false)
                navigation.navigate("ProductBuySuccess")
            }
        })
        .catch(console.log)
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
                <Text style={{fontFamily: "Poppins_500Medium", fontSize: 20}}>Billing address</Text>
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={name}
                    placeholder="Full name"
                    onChangeText={text => setName(text)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={phone}
                    placeholder="Contact number"
                    onChangeText={text => setPhone(text)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={address}
                    placeholder="Full address"
                    onChangeText={text => setAddress(text)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={zip}
                    placeholder="ZIP Code"
                    onChangeText={text => setZip(text)}
                    autoCorrect={false}
                />
            </ScrollView>   

            <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => {placeOrder()}}>Continue to Payment</Button>
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
  },  
  input: {
    height: 45,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    fontSize: 18
  },  
})

export default Bill