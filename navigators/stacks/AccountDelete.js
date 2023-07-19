import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../../screens/ShopScreen';
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import Product from '../../screens/ProductScreen';

export default function CustomerShopStack () {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"Shop"} 
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Shop" component={Shop} options={{title: "Shop"}} />
                <Stack.Screen name="Product" component={Product}options={{title: "Product details"}} />
            </Stack.Navigator>
    );
}