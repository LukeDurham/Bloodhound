import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/landingPage'
import Home from './screens/homePage';
import RegisterPage from './screens/registerPage'
import Profile from './screens/profilePage';
//backend import
import React, { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={LandingPage}
          options={{
            headerShown: false,
          }} 
          />
        <Stack.Screen 
          name="Register" 
          component={RegisterPage}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
