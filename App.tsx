import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useCallback } from 'react';
import Item from './components/Item';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={handleClick}>{count}</Text>
      <StatusBar style="auto" />
      <div>Item</div>
    </View>
  );
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
