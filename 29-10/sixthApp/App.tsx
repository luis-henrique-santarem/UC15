import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TemaProvider } from './context/TemaContext'
import Tela from './components/Tela'
import { UserProvider } from './context/UserContext'
import { TelaUsuario } from './components/TelaUser'

export default function App() {

  return (
    <UserProvider>
        <TelaUsuario/>
    </UserProvider>

  )
}

const styles = StyleSheet.create({})