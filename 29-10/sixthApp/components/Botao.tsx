import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useTema} from '../context/TemaContext'

export default function Botao() {
    const {temaEscuro, setTemaEscuro} = useTema()

  return (
   <Button
        title={temaEscuro ? 'Mudar para Claro' : 'Mudar para Escuro'}
        onPress={() => setTemaEscuro(!temaEscuro)}
   ></Button>
  )
}

const styles = StyleSheet.create({})