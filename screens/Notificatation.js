import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Notification = ({navigation}) => {

    const [data, setList] = React.useState([
        {
            id: 13,
            name: "Raktim Banerjee",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
            lastMessage: "Has completed the job",
            lastMessageTime: "1 mins ago",
        },
    ])

    const ChatListRender = ({item}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.5} 
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
                onPress={() => navigation.navigate("BarbarReviewScreen", {customer: item})}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Avatar 
                        size={50}
                        rounded
                        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                        <Text style={{fontSize: 14, color: "grey", marginTop: 2}}>{item.lastMessage}</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>
                    <Text style={{color: "grey", marginBottom: 5}}>{item.lastMessageTime}</Text>
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
            >
                <Text>Today</Text>
                {data.map(data => <ChatListRender key={data.id} item={data} />)}
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

export default Notification