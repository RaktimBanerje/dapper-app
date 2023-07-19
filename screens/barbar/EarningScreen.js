import { Text } from '@rneui/base';
import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar } from '@rneui/base';
import axios from '../../utils';
import { StoreContext } from '../../App';


const EarningScreen = ({navigation}) => {

  const {state, setState} = React.useContext(StoreContext)
  const [user, setUser]  = React.useState(null)
  const [shops, setShop]  = React.useState([])

  const loadData = () => {

  }


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>

        </View>

      </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#FDFDFD',
  },

})

export default EarningScreen