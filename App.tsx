import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WishList from './components/page4/WishList';
import Edit from './components/page4/Edit';

import Tab from './navigation/tab'
import HomePage from './components/HomePage';
export default function App(): JSX.Element {
  const [userKey, setuserKey]=useState('batrong')

  return (
      // <WishList userKey= {userKey} />
      <Edit/>
  )
}