import { Button, Text } from '@rneui/base'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView, View } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import axios from '../utils'

const PaymentScreen = ({route, navigation}) => {
    const {id} = route.params
    const [isLoading, setIsLoading] = React.useState(false)

    const checkout = () => {
        setIsLoading(true)
        axios.get(`/checkout?appointment=${id}}`)
        .then(response => {
            if(response.status == 200) {
                WebBrowser.openBrowserAsync(response.data.payment_link.url)   
            }
            else {
                alert("Something went wrong")
            }
        })
        .catch(console.log)
        .finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {/* <View style={{
                    width: "100%", 
                    borderWidth: 0.5, 
                    borderColor: "grey", 
                    borderRadius: 6,
                    paddingVertical: 10,  
                    paddingHorizontal: 10, 
                    backgroundColor: "white", 
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            source={require("../assets/visa.png")}
                            style={{height: 30, width: 30}}
                        />
                        <Text style={{fontSize: 18, color: '#6C6C6C', marginLeft: 12}}>Credit card</Text>
                    </View>
                </View>
                
                <View style={{
                    width: "100%", 
                    borderWidth: 0.5, 
                    borderColor: "grey", 
                    borderRadius: 6,
                    paddingVertical: 10,  
                    paddingHorizontal: 10, 
                    backgroundColor: "white", 
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            source={require("../assets/google.png")}
                            style={{height: 30, width: 30}}
                        />
                        <Text style={{fontSize: 18, color: '#6C6C6C', marginLeft: 12}}>Google pay</Text>
                    </View>
                </View>

                <View style={{
                    width: "100%", 
                    borderWidth: 0.5, 
                    borderColor: "grey", 
                    borderRadius: 6,
                    paddingVertical: 20,  
                    paddingHorizontal: 10, 
                    backgroundColor: "white", 
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            source={require("../assets/apple.png")}
                            style={{height: 30, width: 30}}
                        />
                        <Text style={{fontSize: 18, color: '#6C6C6C', marginLeft: 12}}>Apple pay</Text>
                    </View>
                </View>

                <View style={{
                    width: "100%", 
                    borderWidth: 0.5, 
                    borderColor: "grey", 
                    borderRadius: 6,
                    paddingVertical: 10,  
                    paddingHorizontal: 10, 
                    backgroundColor: "white", 
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            source={require("../assets/paypal.png")}
                            style={{height: 30, width: 30}}
                        />
                        <Text style={{fontSize: 18, color: '#6C6C6C', marginLeft: 12}}>Paypal</Text>
                    </View>
                </View> */}

                <TouchableOpacity activeOpacity={1} style={{
                    width: "100%", 
                    borderWidth: 0.5, 
                    borderColor: "grey", 
                    borderRadius: 6,
                    paddingVertical: 10,  
                    paddingHorizontal: 10, 
                    backgroundColor: "white", 
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            source={require("../assets/square.png")}
                            style={{height: 30, width: 30}}
                        />
                        <Text style={{fontSize: 18, color: '#6C6C6C', marginLeft: 12}}>Square</Text>
                        <MaterialCommunityIcons name="radiobox-marked" size={22} color="#AE8447" style={{marginLeft: "auto"}} />
                    </View>
                </TouchableOpacity>

            </ScrollView>
            <Button 
                loading={isLoading}
                disabled={isLoading}
                buttonStyle={{width: "100%", height: 43, borderRadius: 9, backgroundColor: "#AE8447"}}
                title={"Continue"}
                onPress={() => checkout()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    }  
})

export default PaymentScreen