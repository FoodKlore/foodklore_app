import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BusinessPage from '../screens/BusinessPage'
import ItemDescription from '../screens/ItemDescription'
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import ConfirmAccount from '../screens/ConfirmAccount'

const Stack = createStackNavigator();

export default function AccountAccessStack () {
  return(
    <Stack.Navigator initialRouteName="/">
      <Stack.Screen
        name="/" // This is the header
        component={ConfirmAccount}
      />
    </Stack.Navigator>
  );
}