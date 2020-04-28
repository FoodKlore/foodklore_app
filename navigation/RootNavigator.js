import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BusinessStack from '../navigation/BusinessStack'

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
    </View>
  );
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BusinessStack} />
    </Drawer.Navigator>
  );
};