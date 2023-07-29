import { Button } from '@rneui/base';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const DeleteStep1 = ({navigation}) => {

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
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, paddingVertical: 20, borderWidth: 4, borderColor: "whitesmoke"}}>
          <Button containerStyle={{width: "40%"}} buttonStyle={styles.secondaryButtonStyle} onPress={() => {}}>No</Button>
          <Button containerStyle={{width: "40%"}} buttonStyle={styles.primaryButtonStyle} onPress={() => {}}>Yes</Button>
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
    justifyContent: "center"
  },
  secondaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447",
  },  
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447",
  },
})

export default DeleteStep1