import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/landingPage'
import Home from './screens/homePage';
import RegisterPage from './screens/registerPage'
import UsersPage from './screens/usersPage'
import Profile from './screens/profilePage';
//backend import


const Stack = createNativeStackNavigator();

export default function App() {

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
          name="Users" 
          component={UsersPage}
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
