
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Aboutus from '../screens/Aboutus';
import Howto from '../screens/Howto';

const Stack = createNativeStackNavigator();

export default function TopicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopicHome"
        component={HomeScreen}
        options={{ title: 'ShareBite' }}
      />
      <Stack.Screen
        name="Howto"
        component={Howto}
        options={{ title: 'วิธีใช้งาน' }}
      />
      <Stack.Screen
        name="Aboutus"
        component={Aboutus}
        options={{ title: 'เกี่ยวกับแอป' }}
      />
    </Stack.Navigator>
  );
}
