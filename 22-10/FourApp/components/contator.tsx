import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function contator() {
 // Declaramos o estado 'contador' a função setContador que altera o estado inicial, ou seja, o valor inicial, é '0'
    const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
       <Text style={styles.text}>Você clicou {contador} vezes</Text>
      <Button title='Clique'
      onPress={() => setContador(contador + 1)}
      ></Button>r
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
})