import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutSreen({ navigation }: any) {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>AboutSreen</Text>
      <Button
        title="Voltar para Profile"
        onPress={() => navigation.goBack()} 
     />
    </View>
  )
}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "red",
        fontSize: 23,
        fontWeight: "semibold"
    }
})