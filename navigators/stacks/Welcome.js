import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupChoice from '../../screens/SignupChoice';
import Signup from '../../screens/Signup';
import EmailLogin from '../../screens/EmailLogin';
import OTPVerification from '../../screens/OTPVerification';
import MainScreen from '../../screens/MainScreen';
import SearchScreen from '../../screens/SearchScreen';

import Splash from '../../screens/Splash';
import Splash1 from '../../screens/Splash1';
import Splash2 from '../../screens/Splash2';
import Splash7 from '../../screens/Splash7';
import Splash8 from '../../screens/Splash8';
import Splash9 from '../../screens/Splash9';
import Splash10 from '../../screens/Splash10';
import Splash11 from '../../screens/Splash11';
import Splash12 from '../../screens/Splash12';
import Splash13 from '../../screens/Splash13';
import Splash6 from '../../screens/Splash6';
import Splash5 from '../../screens/Splash5';
import Splash4 from '../../screens/Splash4';
import Splash3 from '../../screens/Splash3';
import EmailSignup from '../../screens/EmailSignup';
import PhoneLogin from '../../screens/PhoneLogin';

export default function App() {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                
            }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Splash1" component={Splash1} />
                <Stack.Screen name="Splash2" component={Splash2} />
                <Stack.Screen name="Splash3" component={Splash3} />
                <Stack.Screen name="Splash4" component={Splash4} />
                <Stack.Screen name="Splash5" component={Splash5} />
                <Stack.Screen name="Splash6" component={Splash6} />
                <Stack.Screen name="Splash7" component={Splash7} />
                <Stack.Screen name="Splash8" component={Splash8} />
                <Stack.Screen name="Splash9" component={Splash9} />
                <Stack.Screen name="Splash10" component={Splash10} />
                <Stack.Screen name="Splash11" component={Splash11} />
                <Stack.Screen name="Splash12" component={Splash12} />
                <Stack.Screen name="Splash13" component={Splash13} />
                <Stack.Screen name="SignupChoice" component={SignupChoice} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="EmailSignup" component={EmailSignup} />
                <Stack.Screen name="EmailLogin" component={EmailLogin} />
                <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
                <Stack.Screen name="OTPVerification" component={OTPVerification} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}