import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomePage({ count }: { count: number }) {
  return (
    <View>
      <Text>OOP {count}</Text>
    </View>
  )
}
