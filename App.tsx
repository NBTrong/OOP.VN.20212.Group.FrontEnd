import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './components/HomePage';

export default function App() {
  const [count] = React.useState<number>(10);
  return (
    <View style={styles.container}>
      <HomePage count={count}/>
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
