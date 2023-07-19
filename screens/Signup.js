import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import SafeAreaView from 'react-native-safe-area-view'
import {
  useFonts,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';


const Signup = ({route, navigation}) => {

  const {role} = route.params
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setSubmitting] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)
  const [error, setError] = React.useState([])
  
  let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
          <Text h3 h3Style={styles.loginText}>Sign Up</Text>
          <Text style={{marginBottom: 20}}>Use email or another service to continue with the Dapper</Text>

          <TouchableOpacity activeOpacity={1} style={{border: "#D8D8D8", borderWidth: 0.5, borderRadius: 8, marginBottom: 15, padding: 15, flexDirection: "row", alignItems: "center"}}>
              <Image 
                resizeMode="cover"
                source={require("../assets/google1.png")}
              />
              <Text style={{fontFamily: "Poppins_500Medium", fontSize: 17, marginLeft: 15}}>continue with google</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={{border: "#D8D8D8", borderWidth: 0.5, borderRadius: 8, marginBottom: 15, padding: 15, flexDirection: "row", alignItems: "center"}}>
            <Image 
                resizeMode="cover"
                source={require("../assets/facebook.png")}
              />
              <Text style={{fontFamily: "Poppins_500Medium", fontSize: 17, marginLeft: 15}}>continue with facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={{border: "#D8D8D8", borderWidth: 0.5, borderRadius: 8, marginBottom: 15, padding: 15, flexDirection: "row", alignItems: "center"}} onPress={() => navigation.navigate("EmailSignup", {role})}>
            <Image 
                resizeMode="cover"
                source={require("../assets/email.png")}
              />
              <Text style={{fontFamily: "Poppins_500Medium", fontSize: 17, marginLeft: 15}}>continue with email</Text>
          </TouchableOpacity>

          <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => send()}>Log In</Button>

          <View style={styles.signupFrame}>
              <Text style={styles.noAccountText}>Already have an account? </Text>
              <Text style={styles.signupText} onPress={() => navigation.navigate("EmailLogin")}>Sign In</Text>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  loginText: {
    color: "grey",
    marginBottom: 10,
  },
  inputContainerStyle: {
    borderRadius: 8,
    borderColor: "grey",
    borderBottomWidth: 0.5,
    borderWidth: 0.5,
  },
  inputStyle: {
    paddingLeft: 10
  },
  leftIconContainerStyle: {
    marginLeft: 10
  },
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447"
  },
  secondaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#EFEFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  secondaryButtonTitleStyle: {
    color: "grey",
  },
  dividerText: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  dividerTextStyle: {
    fontSize: 20
  },
  signupFrame: {
    flexDirection: "row", 
    justifyContent: "center", 
    paddingTop: 24
  },
  noAccountText: {
    fontSize: 16, 
    color: "#6C6C6C"
  },
  signupText: {
    fontSize: 16, 
    fontWeight: "bold",  
    color: "#6C6C6C"
  },
})

export default Signup