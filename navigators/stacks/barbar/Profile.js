import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditStorefront from '../../../screens/barbar/EditStorefront';
import ProfileScreen from '../../../screens/barbar/ProfileScreen';
import ListServiceScreen from '../../../screens/barbar/ListServiceScreen';
import AddServiceScreen from '../../../screens/barbar/AddServiceScreen';
import EditServiceScreen from '../../../screens/barbar/EditServiceScreen';
import EditProfile from '../../../screens/barbar/EditProfileScreen';
import SearchScreen from '../../../screens/SearchScreen';
import DeleteStep1 from '../../../screens/Delete/DeleteStep1';

export default function BarbarProfileStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"ProfileScreen"} 
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
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: "Profile"}} />
            <Stack.Screen name="EditProfileScreen" component={EditProfile} options={{title: "Edit Profile"}} />
            <Stack.Screen name="EditStorefrontScreen" component={EditStorefront} options={{title: "Edit Shop"}} />
            <Stack.Screen name="ListServiceScreen" component={ListServiceScreen} options={{title: "Services"}} />
            <Stack.Screen name="AddServiceScreen" component={AddServiceScreen} options={{title: "Add Service"}} />
            <Stack.Screen name="EditServiceScreen" component={EditServiceScreen} options={{title: "Edit Service"}} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{title: "Set Address"}} />
        
            <Stack.Screen name="DeleteStep1" component={DeleteStep1} options={{title: "Are you sure"}} />
            {/* <Stack.Screen name="DeleteStep2" component={}options={{title: "Email verification"}} /> */}
            {/* <Stack.Screen name="DeleteStep3" component={Cart}options={{title: "OTP verification"}} /> */}
            {/* <Stack.Screen name="DeleteStep4" component={Bill}options={{title: "Delete account"}} /> */}
        
        </Stack.Navigator>
    );
}