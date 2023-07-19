import { Button, Text } from '@rneui/base'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
  } from '@expo-google-fonts/poppins';

const ProductBuySuccess = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
            <View style={styles.container}>
                <View style={styles.top}>
                <Text style={{color: "#AE8447", fontFamily: 'Poppins_500Medium', fontSize: 30, textAlign: "center", marginBottom: 40}}>Thank you for your order</Text>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/success.png")}
                    />
                    <Text style={{color: "#575757", fontFamily: 'Poppins_500Medium', fontSize: 15, textAlign: "center", marginTop: 40}}>Estimate delivery</Text>
                    <Text style={{color: "#575757", fontFamily: 'Poppins_500Medium', fontSize: 15, textAlign: "center"}}>12/06/2023</Text>
                    <Text style={{color: "#575757", fontFamily: 'Poppins_500Medium', fontSize: 15, textAlign: "center", marginTop: 40}}>We've emailed you a confirmation and we'll notify you when your order has shipped.</Text>
                </View>
                <View style={styles.bottom}>
                    <Button 
                        buttonStyle={{width: 200, height: 43, borderRadius: 100, backgroundColor: "#AE8447"}}
                        title={"Home"}
                        onPress={() => navigation.push("Splash8")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 14
    },
    top: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ProductBuySuccess