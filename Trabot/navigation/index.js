import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Market from '../Screens/MarketScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen';
import BotScreen from '../Screens/BotScreen';
import TabNavigator from './TabNavigator';
import NewsScreen from '../Screens/NewsScreen';
import ArithmeticBot from '../Screens/ArithmeticBot/ArithmeticBot';
import Preset from '../Screens/ArithmeticBot/Preset'
import GeometricBot from '../Screens/GeometricBot';


const Stack = createNativeStackNavigator();

export default Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name ="Login" component={LoginScreen} />
                <Stack.Screen name ="Market" component={TabNavigator} />
                <Stack.Screen name ="Profile" component={ProfileScreen}/>
                <Stack.Screen name ="Bot" component={BotScreen} />
                <Stack.Screen name ="News" component= {NewsScreen} />
                <Stack.Screen name ="ArithmeticBot" component={ArithmeticBot}/>
                <Stack.Screen name ="Preset" component= {Preset} />
                <Stack.Screen name ="GeometricBot" component= {GeometricBot} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
