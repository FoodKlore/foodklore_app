import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BusinessPage from '../screens/BusinessPage'
import ItemDescription from '../screens/ItemDescription'
import BottomTabNavigator from '../navigation/BottomTabNavigator'

const Stack = createStackNavigator();

export default function AccountAccessStack () {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Account Access" // This is the header
        component={BottomTabNavigator}
      />

      <Stack.Screen
        name="Create Guest Account"
        component={BusinessPage}
      />

      <Stack.Screen
        name="Create User"
        component={ItemDescription}
      />
    </Stack.Navigator>
  );
}