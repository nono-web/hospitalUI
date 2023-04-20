import { View, Text } from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from '../Messages';
import Settings from '../Setting';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      barStyle={{ backgroundColor: '#ecf0f1' }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
            headerTintColor: '#fff',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size, backgroundColor }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={20} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Paramétre"
        component={Settings}
        options={{
          tabBarLabel: 'Paramétre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
