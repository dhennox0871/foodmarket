import React from 'react'
import {SplashScreen,SignIn } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Router = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }}/>
      </Stack.Navigator>
    
}

export default Router;