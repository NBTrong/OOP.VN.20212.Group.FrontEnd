import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { useCallback } from 'react';
import HomeStay from './components/page4/HomeStay';
export default function App(): JSX.Element {
  const [count, setCount] = React.useState(0);
  return (
    
       <HomeStay/>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'red',
  }
});