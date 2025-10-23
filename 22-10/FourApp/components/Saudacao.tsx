import { StyleSheet, Text, TextInput, View } from 'react-native'
import  { useState } from 'react'

export default function Saudacao() {
    const [nome, setNome] = useState<string>('')
  return (

    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Digite seu nome'
      value={nome}
      onChangeText={setNome}
      />

      <Text style={styles.text}>Olá, {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white'
  },
  input: {
    width: '80%',
    height: 50,
    fontSize: 14,
    backgroundColor: 'white'
  }
})