import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../../../screens/customer/MainScreen';
import AppointmentConfirm from '../../../screens/customer/AppointmentConfirm';
import SearchScreen from '../../../screens/customer/SearchScreen';

export default function CustomerMainStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
        initialRouteName={"MainScreen"} 
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="AppointmentConfirm" component={AppointmentConfirm} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            
        </Stack.Navigator>
    );
}