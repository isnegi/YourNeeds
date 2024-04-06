import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SingIn';
import Verify from '../screens/Verify';
import UserNavigator from './User';

// parent or top-level navigator
const Stack = createNativeStackNavigator();

const PrimaryNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Verify" component={Verify} />
                <Stack.Screen name="ToApp" component={UserNavigator} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}

export default PrimaryNavigator