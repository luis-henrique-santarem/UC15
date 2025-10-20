import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


export default function Botao(props: {title:string, aoPressionar:() => void }) {
  return (
    <View>
      <Button title={props.title} onPress={props.aoPressionar}></Button>
    </View>
  )
}

const styles = StyleSheet.create({


})