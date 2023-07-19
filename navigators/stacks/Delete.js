import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import Step1 from '../../screens/Delete/Step1';

export default function DeleteStack () {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"DeleteStep1"} 
        >
            <Stack.Screen name="DeleteStep1" component={Step1} options={{title: "Are you sure"}} />
            <Stack.Screen name="DeleteStep2" component={Product}options={{title: "Email verification"}} />
            <Stack.Screen name="DeleteStep3" component={Cart}options={{title: "OTP verification"}} />
            <Stack.Screen name="DeleteStep4" component={Bill}options={{title: "Delete account"}} />
        </Stack.Navigator>
    );
}