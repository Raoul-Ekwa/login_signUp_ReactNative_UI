import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import SearchScreen from '../../screens/TabBarPages/SearchScreen';
import SettingsScreen from '../../screens/TabBarPages/SettingsScreen';
import DiscoverScreen from '../../screens/TabBarPages/DiscoverScreen';
import PageAcceuil from '../../screens/TabBarPages/PageAcceuil';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
   // <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Actualités') {
              iconName = 'home';
            } else if (route.name === 'Recherche') {
              iconName = 'search';
            } else if (route.name === 'Paramètres') {
              iconName = 'settings';
            } else if (route.name === 'Découvrir') {
              iconName = 'compass';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#eb529a',
          tabBarInactiveTintColor: '#2a0602',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Découvrir" component={DiscoverScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Actualités" component={PageAcceuil} options={{ headerShown: false }} />
        <Tab.Screen name="Recherche" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
   // </NavigationContainer>
  );
};

export default HomeScreen;
