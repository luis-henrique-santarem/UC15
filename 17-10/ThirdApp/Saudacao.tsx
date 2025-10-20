import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function Saudacao() {
  return (
   <Text style={styles.text}>Hello people</Text>
  )
}

const styles = StyleSheet.create ({
    text: {
        color: "blue",
        fontSize: 24,
    }
})