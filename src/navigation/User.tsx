import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from '../theme/colors';
import Home from '../screens/Home';
import { BellRing, CalendarDays, HomeIcon, PencilLine, UserRoundSearch } from 'lucide-react-native';
import Finder from '../screens/Finder';
import Post from '../screens/Post';
import Booking from '../screens/Booking';
import Notification from '../screens/Notification';

// child or user navigator
const Tab = createBottomTabNavigator();

const UserNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen
                name="Finder"
                component={Finder}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabel: 'Finder',
                    tabBarIcon: ({ color, size }) => <UserRoundSearch color={color} size={size} />,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => <PencilLine color={color} size={size} />,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Booking}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabel: 'Bookings',
                    tabBarIcon: ({ color, size }) => <CalendarDays color={color} size={size} />,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => <BellRing color={color} size={size} />,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default UserNavigator;