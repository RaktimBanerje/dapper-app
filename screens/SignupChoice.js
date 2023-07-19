import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SignupChoice = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#fff",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <TouchableOpacity 
        onPress={() => navigation.push("Signup", {role: "BARBAR"})}
        activeOpacity={1}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 160,
          width: "40%",
          borderWidth: 1,
          borderColor: "#AE8447"
        }}>
        <Image
          resizeMode="cover"
          source={require("../assets/barber-1.png")}
        />
        <Text style={{
          paddingTop: 10,
          fontSize: 16,
          color: "#6c6c6c"
        }}>Barber</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.push("Signup", {role: "CUSTOMER"})}
        activeOpacity={0.5} 
        style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 160,
        width: "40%",
        borderWidth: 1,
        backgroundColor: "#AE8447",
        borderColor: "#AE8447"
      }}>
        <Image
          resizeMode="cover"
          source={require("../assets/youngman-1.png")}
        />
        <Text style={{
          paddingTop: 10,
          fontSize: 16,
          color: "#fff"
        }}>Customer</Text>

      </TouchableOpacity>

    </View>
  );
};

export default SignupChoice;
