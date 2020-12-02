import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BusinessPage from '../screens/BusinessPage'
import ItemDescription from '../screens/ItemDescription'
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import CreateGuest from '../screens/CreateGuest'
import AccountSuccessfullyCreated from '../screens/AccountSuccessfullyCreated'
import CreateOrder from '../screens/CreateOrder'
import CreateUser from '../screens/CreateUser'

const Stack = createStackNavigator()

export default function BusinessStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="BottomHome" // This is the header
                component={BottomTabNavigator}
            />

            <Stack.Screen
                name="Business Page"
                component={BusinessPage}
            />

            <Stack.Screen
                name="Item Description"
                component={ItemDescription}
            />

            <Stack.Screen
                name="Create Guest Account"
                component={CreateGuest}
            />

            <Stack.Screen
                name="Account Created Successfully"
                component={AccountSuccessfullyCreated}
            />

            <Stack.Screen
                name="Create user account"
                component={CreateUser}
            />

            <Stack.Screen
                name="Create Order"
                component={CreateOrder}
            />
        </Stack.Navigator>
    )
}