import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tabs from './components/navigation/tab';

export default function App() {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});