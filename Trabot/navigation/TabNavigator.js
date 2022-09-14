import React, {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MarketScreen from '../Screens/MarketScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen';
import NewsScreen from '../Screens/NewsScreen';
import BotScreen from '../Screens/BotScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 50,
          },
          tabBarLabelStyle: {
            fontSize: 18,
            marginBottom: 10
          }
        }}>
        {/* <Tab.Screen name ="Login" component={LoginScreen} /> */}
        <Tab.Screen name ="Markets" component={MarketScreen}  options={{ tabBarIcon: ({ focused, color, size }) => null }}/>
        {/* <Tab.Screen name ="News" component={NewsScreen}  options={{ tabBarIcon: ({ focused, color, size }) => null }}/> */}
        <Tab.Screen name ="Bot" component={BotScreen}  options={{ tabBarIcon: ({ focused, color, size }) => null }}/>
        <Tab.Screen name ="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused, color, size }) => null }} />

    </Tab.Navigator>

    );
}

export default TabNavigator;