import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../../../screens/Notificatation';
import BarbarReview from '../../../screens/customer/BarbarReview';

export default function CustomerNotificationStack () {
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
                <Stack.Screen name="BarbarReviewScreen" component={BarbarReview} options={{headerShown: false}} />
            </Stack.Navigator>
    );
}