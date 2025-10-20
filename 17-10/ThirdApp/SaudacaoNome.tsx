import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// componente com uso de props
// quando eu chamar esse componente, preciso passar im valor no parametro nome
export default function SaudacaoNome(props: { nome: string }) {
  return (
   
      <Text style={styles.text}>Olá {props.nome}</Text>
   
  )
}

const styles = StyleSheet.create({
    text:{
        color: "red",
        fontSize: 24,
    }
})