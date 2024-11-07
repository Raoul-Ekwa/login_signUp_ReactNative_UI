import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import SignUpScreen from '@/screens/SignUpScreen'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false} }>
          {/* <Stack.Screen name='Home' component={WelcomeScreen}/> */}
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default App

const styles =StyleSheet.create({
  textContainer: {

  },
})