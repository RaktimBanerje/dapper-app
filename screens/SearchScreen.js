import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SafeAreaView from 'react-native-safe-area-view'

const SearchScreen = ({route, navigation}) => {

  const {data, setData} = route.params

  return ( 
    <SafeAreaView style={styles.container} forceInset={{top: "always"}}> 
      <View style={styles.container}>
        <GooglePlacesAutocomplete 
          placeholder="Search location"
          nearbyPlacesAPI='GooglePlacesSearch'
          fetchDetails={true}
          returnKeyType="search"
          enablePoweredByContainer={false}
          isRowScrollable={true}
          query={{
              key: "AIzaSyB-qOmirCo6U4p9xg-iMUP1DspIqeP6aFY",
              language: 'en',
          }}
          debounce={400}
          styles={inputStyles}
          onPress={(googleData, details = null) => {
          setData({...data, 
              address: googleData.description, 
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng
          })
          navigation.goBack()
        }}
    />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    backgroundColor: '#FDFDFD',
  },
})

const inputStyles = StyleSheet.create({
    container: {
      marginBottom: 20,
      marginHorizontal: 18,
      flex: 1,
      zIndex: 5000
    },
    textInputContainer: {
      paddingBottom: 0
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 50,
        borderColor: "black",
        borderBottomWidth: 0.5,
        borderWidth: 0.5,
        fontSize: 18
    }
  })

export default SearchScreen