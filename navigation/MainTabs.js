
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import BookingsScreen from '../screens/BookingsScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: '⌂',
  Search: '⌕',
  Favorites: '♥',
  Bookings: '▤',
};

function TabIcon({ name, focused }) {
  return (
    <View style={[styles.iconBox, focused && styles.activeIconBox]}>
      <Text style={[styles.icon, focused && styles.activeIcon]}>
        {tabIcons[name]}
      </Text>
    </View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#91A295',

        tabBarStyle: styles.tabBar,

        tabBarItemStyle: styles.tabItem,

        tabBarLabelStyle: styles.label,

        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'หน้าแรก',
          tabBarLabel: 'หน้าแรก',
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'ค้นหาอาหาร',
          tabBarLabel: 'ค้นหา',
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'รายการโปรด',
          tabBarLabel: 'รายการโปรด',
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          title: 'รายการจอง',
          tabBarLabel: 'การจอง',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 12,
    height: 76,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 5,
    backgroundColor: '#173D2A',
    borderRadius: 24,
    borderTopWidth: 0,
    elevation: 12,
    shadowColor: '#173D2A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },

  tabItem: {
    paddingTop: 1,
  },

  label: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },

  iconBox: {
    width: 42,
    height: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIconBox: {
    backgroundColor: '#D8E8B8',
  },

  icon: {
    fontSize: 23,
    color: '#91A295',
    fontWeight: 'bold',
  },

  activeIcon: {
    color: '#173D2A',
  },
});
