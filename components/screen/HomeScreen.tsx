import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'cyan',
        alignItems: 'center',
    }
})