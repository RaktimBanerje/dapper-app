import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from "./navigators/stacks/Welcome"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from './utils';

export const StoreContext = React.createContext(null)

export default function App() {

  const [isTouch, setTouch] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)

  const [state, setState] = React.useState({
    user: null,
    token: null,
    loggedIn: false,
    shops: [],
    services: [],
    locations: [],
    customers: [],
    searchAddress: null,
    searchLat: null,
    searchLong: null,
  })

  React.useEffect(() => {
    // AsyncStorage.removeItem("isTouch")
    if(state.token) {
      AsyncStorage.setItem("user", JSON.stringify(state.user))
      AsyncStorage.setItem("token", state.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
    }
  }, [state.token])

  return (
    <StoreContext.Provider value={{state, setState}}> 
      <SafeAreaProvider>
        {/* <OTPVerification /> */}
        {/* <Splash2 /> */}
        {/* <ChatScreen /> */}
        <Welcome />
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
