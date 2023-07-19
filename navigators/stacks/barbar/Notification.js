import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../../../screens/ChatListScreen';
import ChatScreen from '../../../screens/ChatScreen';
import Notification from '../../../screens/Notificatation';

export default function BarbarNotificationStack () {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"NotificationScreen"} 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#AE8447',
                  },
                  headerTintColor: 'white',
                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="NotificationScreen" component={Notification} options={{title: "Notification"}} />
            </Stack.Navigator>
    );
}