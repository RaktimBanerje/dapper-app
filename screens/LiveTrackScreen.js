import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map/Map'

const LiveTrackScreen = ({route, navigation}) => {

  const [loading, setLoading] = React.useState(false)
  const {friend} = route.friend
  const [shopLocation] = React.useState(null)
  const [locations, setLocations] = React.useState(null)

  return (
    <View style={styles.mapContainer}>
        <Map shopLocation={shopLocation} locations={locations} />
    </View>
  )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1
    }
})

export default LiveTrackScreen