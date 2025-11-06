import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AboutScreenDrawer, AboutScreenProps, AboutScreenPropsTop } from '../interface/NavigationInterfaces'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function AboutSreen({ navigation }: AboutScreenPropsTop) {
  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.context}> 
      <Text style={styles.text}>AboutSreen</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.goBack()} 
     />
    </View>
      </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#E0F7FA'
    },
    text: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold"
    },
    context: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
    }
})