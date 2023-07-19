import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Button } from '@rneui/base';
import CustomerMainStack from '../stacks/customer/Main';
import AppointmentHistory from '../../screens/customer/AppointmentHistory';
import { useNavigation } from '@react-navigation/native';
import axios from '../../utils';
import { StoreContext } from '../../App';

const DrawerContent = (props) => {

    const navigation = useNavigation()
    const {state, setState} = React.useContext(StoreContext)

    const logout = () => {
        axios.get("/user/logout")
        .then(response => {
            if(response.status === 200) {
                setState(state => ({...state, token: null, user: null}))
                navigation.navigate("EmailLogin")
            }
        })
    }

    return (
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "#FDFDFD", flex: 1}}>
                <DrawerItemList {...props} />  
                <View style={{padding: 10, borderTopWidth: 1, borderTopColor: "#CCC"}}>
                    <Button
                        title="Log Out"
                        color="black" 
                        onPress={logout}
                    />
                </View>  
            </DrawerContentScrollView>
    )
}

const CustomerDrawer = () => {
    
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator 
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName={"Home"} 
            screenOptions={{
                headerStatusBarHeight: 25,
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={CustomerMainStack} 
            />
            
            <Drawer.Screen 
                name="AppointmentHistory" 
                component={AppointmentHistory} 
            />
        </Drawer.Navigator>
    )
}

export default CustomerDrawer