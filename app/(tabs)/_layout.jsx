import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown:false }}>
      <Tabs.Screen name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color="Blue" />          
          ),
        }}
      />
      <Tabs.Screen name="accessories"/>
      <Tabs.Screen name="profile"/>
    </Tabs>
  );
}
