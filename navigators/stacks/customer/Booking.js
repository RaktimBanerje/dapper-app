import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../../../screens/ChatListScreen';
import ChatScreen from '../../../screens/ChatScreen';
import MyAppointmentList from '../../../screens/customer/MyAppointmentList';
import CustomerAppointmentDetailScreen from '../../../screens/customer/CustomerAppointmentDetailScreen';
import LiveTrackScreen from '../../../screens/LiveTrackScreen';
import PaymentScreen from '../../../screens/PaymentScreen';

export default function BookingChatStack () {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"MyAppointmentList"} 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#AE8447',
                  },
                  headerTintColor: 'white',
                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="MyAppointmentList" component={MyAppointmentList} options={{title: "Booking Details", headerShadowVisible: false}} />
            <Stack.Screen name="MyAppointmentDetailScreen" component={CustomerAppointmentDetailScreen} options={{title: "Booking Details", headerShadowVisible: false}} />
            <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{title: "Message"}} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}} />
            <Stack.Screen name="LiveTrack" component={LiveTrackScreen} options={{title: "Live Tracking"}} />
            <Stack.Screen name="Payment" component={PaymentScreen} options={{title: "Payment"}} />
        </Stack.Navigator>
    );
}