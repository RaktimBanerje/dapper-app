import { Avatar, Button } from '@rneui/base'
import React from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from '../../utils'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';

const AppointmentDetailsScreen = ({route, navigation}) => {

    const {appointment} = route.params
    
    const [isLoading, setLoading] = React.useState(false)
    const [refreshing, setRefreshing] = React.useState(false)
    const [isButtonLoading, setIsButtonLoading] = React.useState(false)
    const [data, setData] = React.useState(null)


    const loadData = () => {
        axios.get(`/appointment/${appointment.id}`)
        .then(response => {
            if(response.status == 200) {
                
                const appointment = response.data

                appointment.date = appointment.schedule.split(" ")[0]
                appointment.time = appointment.schedule.split(" ")[1]
                appointment.time = appointment.time.split(":")[0] + ":" + appointment.time.split(":")[1]
            
                appointment.created_at = new Date(appointment.created_at)
                appointment.created_date = appointment.created_at.toDateString()
                appointment.created_time = appointment.created_at.toTimeString()

                
                setData(appointment)
            }
        })
        .catch(err => console.log(err))
    }

    const onRefresh = () => {
        setRefreshing(true)
        setLoading(true)
        loadData()
        setTimeout(() => {
          setRefreshing(false)
          setLoading(false)
        }, 2000)
    }

    React.useEffect(() => {
        setLoading(true)
        loadData()
        setLoading(false)
    }, [])

    const updateAppointmentStatus = (status) => {
        setIsButtonLoading(true)
        setData({...data,  status: status})
        axios.put(`/appointment/${data.id}?status=${status}`)
        .then(response => {
            if(response.status == 200) {
                loadData()
            }
        })
        .catch(error => {
            alert("Something went wrong")
        })
        .finally(() => {
            setIsButtonLoading(false)
        })
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FDFDFD', padding: 14}}>
            {isLoading && (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color={"#3863CB"} />
                </View>
            )}

            {!isLoading && data && (
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <View>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "center"
                        }}>
                            {data.status == "PROGRESSING" && (
                                <Image 
                                    source={require("../../assets/work_in_progress.png")}
                                />
                            )}
                        </View>

                        <View style={{
                            width: "100%", 
                            borderWidth: 0.5, 
                            borderColor: "grey", 
                            borderRadius: 9,  
                            padding: 10, 
                            backgroundColor: "white",
                            marginTop: 10
                        }}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Avatar 
                                    size={50}
                                    rounded
                                    source={{uri: data.friend.image ? `https://digitalplutform.com/trimme/storage/app/${data.friend.image}` : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Favatar&psig=AOvVaw2ei-nswZDZfYRdxUxuTbZq&ust=1674979258159000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCmiI_m6fwCFQAAAAAdAAAAABAE"}}
                                />
                                <Text style={{fontSize: 18}}>{data.friend.name}</Text>
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 10,}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <AntDesign name="calendar" size={18} color="#AE8447" />
                                    <Text style={{marginLeft: 5, fontSize: 16}}>{data.date}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <AntDesign name="clockcircleo" size={18} color="#AE8447" />
                                    <Text style={{marginLeft: 5, fontSize: 16}}>{data.time}</Text>
                                </View>
                                
                            </View>

                        </View>

                        <View style={{
                            width: "100%", 
                            borderWidth: 0.5, 
                            borderColor: "grey", 
                            borderRadius: 9,
                            paddingVertical: 10,  
                            paddingHorizontal: 10, 
                            backgroundColor: "white", 
                            marginTop: 10
                        }}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Text style={{fontSize: 18}}>Status</Text>
                                <Text style={{fontSize: 18}}>{data.status}</Text>
                            </View>
                        </View>

                        <View style={{
                            width: "100%", 
                            borderWidth: 0.5, 
                            borderColor: "grey", 
                            borderRadius: 9,
                            paddingVertical: 10,  
                            paddingHorizontal: 10, 
                            backgroundColor: "white", 
                            marginTop: 10
                        }}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Text style={{fontSize: 18}}>Payment Status</Text>
                                <Text style={{fontSize: 18}}>{data.payment_status}</Text>
                            </View>
                        </View>


                        <View style={{
                            width: "100%", 
                            borderWidth: 0.5, 
                            borderColor: "grey", 
                            borderRadius: 9,
                            paddingVertical: 10,  
                            paddingHorizontal: 10, 
                            backgroundColor: "white", 
                            marginTop: 10
                        }}>
                            {data.services.map((service, index) => (
                                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                    <Text style={{fontSize: 18}}>{service.name}</Text>
                                    <Text style={{fontSize: 18}}><FontAwesome name="dollar" size={18} />{service.price}</Text>
                                </View>
                            ))}

                            <View style={{flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "grey", marginTop: 20}}>
                                <Text style={{fontSize: 18, color: "grey"}}>Address</Text>
                                <Text style={{fontSize: 18, color: "grey", marginLeft: 40}}>{data.friend.address}</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "grey", marginTop: 20}}>
                                <Text style={{fontSize: 18, color: "grey"}}>Phone</Text>
                                <Text style={{fontSize: 18, color: "grey", marginLeft: 40}}>{data.friend.phone}</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "grey", marginTop: 20}}>
                                <Text style={{fontSize: 18, color: "grey"}}>Booking Date</Text>
                                <Text style={{fontSize: 18, color: "grey", marginLeft: 40}}>{data.created_date}</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "grey", marginTop: 20}}>
                                <Text style={{fontSize: 18, color: "grey"}}>Booking Time</Text>
                                <Text style={{fontSize: 18, color: "grey", marginLeft: 40}}>{data.created_time}</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "grey", marginTop: 20}}>
                                <Text style={{fontSize: 18, color: "grey"}}>Total</Text>
                                <Text style={{fontSize: 18, color: "grey", marginLeft: 40}}><FontAwesome name="dollar" size={18} />{data.price}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View>
                        {data.status === "PENDING" && (
                            <>
                                <Button 
                                    isLoading={isButtonLoading}
                                    size="lg"
                                    containerStyle={{marginTop: 20}}
                                    type="outline"
                                    buttonStyle={{borderRadius: 100}}
                                    onPress={() => updateAppointmentStatus("APPROVE")}
                                >
                                    { data.status == "APPROVE" ? (
                                            <>
                                                <Feather name="check" size={16} color="green" />
                                                <Text style={{color: "green"}}> Accepted</Text>
                                            </>
                                        ) : (
                                            <Text style={{color: "#AE8447", fontSize: 16}}>Accept Appointment</Text>
                                        )
                                    }
                                </Button>

                                <Button 
                                    size="lg"
                                    containerStyle={{marginTop: 20}}
                                    type="outline"
                                    buttonStyle={{borderRadius: 100}}
                                    title="Decline"
                                />
                            </>
                        )}

                        {data.status === "APPROVE" && (
                            <>
                                <Button 
                                    size="lg"
                                    containerStyle={{marginTop: 20}}
                                    type="outline"
                                    buttonStyle={{borderRadius: 100}}
                                    title="Work In Progress"
                                    onPress={() => updateAppointmentStatus("PROGRESSING")}
                                />

                                <Button 
                                    isLoading={isButtonLoading}
                                    size="lg"
                                    containerStyle={{marginTop: 20}}
                                    type="outline"
                                    buttonStyle={{borderRadius: 100}}
                                    title="Live Track"
                                />
                            </>
                        )}

                        {data.status === "PROGRESSING" && (
                            <Button 
                                isLoading={isButtonLoading}
                                size="lg"
                                containerStyle={{marginTop: 20}}
                                type="outline"
                                buttonStyle={{borderRadius: 100}}
                                title="Work Completed"
                                onPress={() => {
                                    updateAppointmentStatus("COMPLETE")
                                    navigation.navigate("JobCompleteScreen", {data})
                                }}
                            />
                        )}
                        
                        {data.status != "PROGRESSING" && (
                            <Button 
                                isLoading={isButtonLoading}
                                size="lg"
                                title="Message friend"
                                containerStyle={{marginTop: 20}}
                                buttonStyle={{backgroundColor: "#AE8447", borderRadius: 100}}
                                onPress={() => navigation.navigate("ChatScreen", {friend: data.friend})}
                            />
                        )}
                    </View>
                </ScrollView>
            )} 
        </View>
    )
}

export default AppointmentDetailsScreen