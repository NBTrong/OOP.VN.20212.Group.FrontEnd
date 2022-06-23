import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useCallback } from 'react';
import Item from './components/Item';
import ExpensePage from './components/showExpense/ExpensePage';
import IncomePage from './components/showIncome/IncomePage';
export default function App() {
  return(
    <ExpensePage/>
  )
}