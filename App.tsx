import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './components/HomePage';


export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <HomePage/>
  );
}

const styles = StyleSheet.create({
});