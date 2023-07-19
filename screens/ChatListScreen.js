import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from "../utils"

const ChatListScreen = ({navigation}) => {

    const [query, setquery] = React.useState('')
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const [filterData, setFilterData] = React.useState([])
    
    const loadData = () => {
        setLoading(true)
        axios.get("/chat/persons")
        .then(response =>  {
            if(response.status == 200){
                setData(response.data.persons)
                setFilterData(response.data.persons)
            }
        })
        .catch(console.log)
        .finally(() => setLoading(false))
    }
      
    const onRefresh = () => {
    setRefreshing(true)
    loadData()
    setTimeout(() => {
        setRefreshing(false)
    }, 2000)
    }
    
    React.useEffect(() => {
        loadData()
    }, [])

    React.useEffect(() => { 
        const results =  data.filter(obj => {
            if (query === "") return obj
            return obj.user.name.toLowerCase().includes(query.toLowerCase())
        })

        setFilterData(results)
    }, [query])

    const ChatListRender = ({item}) => {
        return (
            <TouchableOpacity 
                activeOpacity={1} 
                style={{
                    marginVertical: 10, 
                    padding: 5,
                    paddingVertical: 10, 
                    borderWidth: 0.5,
                    borderRadius: 8,
                    borderColor: "#6B6983",
                    backgroundColor: "#F3F3F3",
                    flexDirection: "row",
                    justifyContent: "space-between" 
                }}
                onPress={() => navigation.navigate("ChatScreen", {friend: item.user})}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image 
                        style={{height: 60, width: 60, borderRadius: 100}}
                        source={{uri: `https://digitalplutform.com/trimme/storage/app/${item.user.image}`}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.user.name}</Text>
                        <Text style={{fontSize: 14, color: "grey", marginTop: 2}}>{(item.lastChat.message).substring(0,30)} ...</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: "column", alignItems: "center"}}>
                    <Text style={{color: "grey", marginBottom: 5}}>{new Date(item.lastChat.created_at).getHours() + ":" + new Date(item.lastChat.created_at).getMinutes()}</Text>
                    <View style={{backgroundColor: "#2D2A31", borderRadius: 100, height: 25, width: 25, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 16, color: "white", fontWeight: "bold"}}>1</Text>    
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
            >
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={query}
                    placeholder="Search"
                    onChangeText={setquery}
                    autoCorrect={false}
                />  
                {filterData?.length == 0 ?  (
                    <View style={{flex: 1, alignItems: "center"}}>
                        <Text style={{fontSize: 18}}>No result found</Text>
                    </View>
                ) : (
                    filterData?.map((data, index) => <ChatListRender key={data.user.id} item={data} />)
                )}
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    input: {
        height: 45,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        fontSize: 18
    },  
})

export default ChatListScreen