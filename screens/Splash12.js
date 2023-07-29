import { Button, Text } from '@rneui/base'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Octicons } from '@expo/vector-icons';
import {
    useFonts,
    Poppins_500Medium,
  } from '@expo-google-fonts/poppins';

const Splash12 = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/splash12.png")}
                    />
                    <Text style={{color: "#263238", fontFamily: 'Poppins_500Medium', fontSize: 28, textAlign: "center", marginVertical: 40}}>Suitable barbers will accept the job</Text>
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash, styles.dashActive]} />
                        <Octicons name="dash" size={24} color="black" style={[styles.dash]} />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Button 
                        buttonStyle={{width: 100, height: 43, borderRadius: 9, backgroundColor: "whitesmoke"}}
                        titleStyle={{color: "grey"}}
                        title={"Skip"}
                        onPress={() => navigation.navigate("EmailLogin")}
                    />
                    <Button 
                        buttonStyle={{width: 100, height: 43, borderRadius: 9, backgroundColor: "#AE8447"}}
                        title={"Next"}
                        onPress={() => navigation.push("Splash13")}
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    dash: {
        marginHorizontal: 1,
        color: "#DDDDDD"
    },
    dashActive: {
        color: "black"
    }
})

export default Splash12