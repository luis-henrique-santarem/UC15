import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SaudacaoNome from './SaudacaoNome'

export default function Perfil(props: {nome:string, idade:number}) {
  return (
    <View>
   <SaudacaoNome nome={props.nome}/>
    <Text>Idade: {props.idade}</Text>
   </View>
  )
}

const styles = StyleSheet.create({})