import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Orders from '../screens/Orders';
import ShoppingCart from '../screens/ShoppingCart';
import LoginScreen from '../screens/LoginScreen';
import CreateGuest from '../screens/CreateGuest';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Restaurants';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Restaurants"
        component={HomeScreen}
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-restaurant" />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={Orders}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Shopping Cart"
        component={ShoppingCart}
        options={{
          title: 'Shopping Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={LoginScreen}
        options={{
          title: 'Account Access',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'How to get started';
//     case 'Links':
//       return 'Links to learn more';
//   }
// }
