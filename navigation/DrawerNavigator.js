
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import Howto from '../screens/Howto';
import Aboutus from '../screens/Aboutus';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2F7D46' },
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#2F7D46',
        drawerLabelStyle: { fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={MainTabs}
        options={{ title: 'ShareBite', drawerLabel: 'หน้าหลัก' }}
      />
      <Drawer.Screen
        name="Howto"
        component={Howto}
        options={{ title: 'วิธีใช้งาน', drawerLabel: 'วิธีใช้งาน' }}
      />
      <Drawer.Screen
        name="Aboutus"
        component={Aboutus}
        options={{ title: 'เกี่ยวกับแอป', drawerLabel: 'เกี่ยวกับแอป' }}
      />
    </Drawer.Navigator>
  );
}
