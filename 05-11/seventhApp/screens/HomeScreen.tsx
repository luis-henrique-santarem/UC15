import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../interface/NavigationInterfaces';


export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>miguel carlos</Text>
      <Button
        title="Ir para Profile"
        onPress={() => navigation.navigate('Profile', {userId: 1})} 
      />
      <Button
        title="Ir para About"
        onPress={() => navigation.navigate('About')} 
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
        color: "green",
        fontSize: 23,
        fontWeight: "semibold"
    }
})