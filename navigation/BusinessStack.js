import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BusinessPage from '../screens/BusinessPage'
import ItemDescription from '../screens/ItemDescription'
import BottomTabNavigator from '../navigation/BottomTabNavigator'

const Stack = createStackNavigator();

export default function BusinessStack () {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
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
    </Stack.Navigator>
  );
}