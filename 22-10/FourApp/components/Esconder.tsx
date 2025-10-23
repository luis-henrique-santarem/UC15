import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Esconder() {
    const [visivel, setVisivel] = useState(false);
   

  return (
    <View style={styles.container}>
     <Button
     title= {visivel ? 'Esconder texto' : 'Mostrar texto'}
     onPress={() => setVisivel(!visivel)}
     />

    {visivel ? <Text style={styles.text}>Texto apareceu</Text> : null}
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