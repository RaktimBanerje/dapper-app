import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../../screens/ShopScreen';
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import Product from '../../screens/ProductScreen';
import Cart from '../../screens/CartScreen';
import Bill from '../../screens/BillingAddress';
import ProductBuySuccess from '../../screens/ProductBuySuccess';

export default function CustomerShopStack () {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"Shop"} 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#AE8447',
                  },
                  headerTintColor: 'white',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 22
                },
            }}>
                
                <Stack.Screen name="Shop" component={Shop} options={{title: "Shop"}} />
                <Stack.Screen name="Product" component={Product}options={{title: "Product details"}} />
                <Stack.Screen name="Cart" component={Cart}options={{title: "Cart"}} />
                <Stack.Screen name="Bill" component={Bill}options={{title: "Billing & Shipping"}} />
                <Stack.Screen name="ProductBuySuccess" component={ProductBuySuccess} options={{headerShown: false}} />
            </Stack.Navigator>
    );
}