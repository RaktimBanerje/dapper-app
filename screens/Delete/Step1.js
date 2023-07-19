import { Button } from '@rneui/base';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Step1 = ({navigation}) => {

    const generateBoxShadowStyle = (
        xOffset,
        yOffset,
        shadowColorIos,
        shadowOpacity,
        shadowRadius,
        elevation,
        shadowColorAndroid,
      ) => {
        if (Platform.OS === 'ios') {
          styles.boxShadow = {
            shadowColor: shadowColorIos,
            shadowOffset: {width: xOffset, height: yOffset},
            shadowOpacity,
            shadowRadius,
          };
        } else if (Platform.OS === 'android') {
          styles.boxShadow = {
            elevation,
            shadowColor: shadowColorAndroid,
          };
        }
      };
    
      generateBoxShadowStyle(-2, 4, '#171717', 0.1, 3, 6, '#171717');

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
      <View style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Button containerStyle={{width: "45%"}} buttonStyle={styles.primaryButtonStyle} onPress={() => {}}>Check Out</Button>
          <Button containerStyle={{width: "45%"}} buttonStyle={styles.primaryButtonStyle} onPress={() => {}}>Check Out</Button>
        </View>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: "#fff",
  },
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447",
    marginTop: 28,
    marginBottom: 10
  },
})

export default Step1