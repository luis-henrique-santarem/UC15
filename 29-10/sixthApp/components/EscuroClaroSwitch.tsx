import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { useTema } from '../context/TemaContext'

export default function EscuroClaroSwitch() {
const {temaEscuro, setTemaEscuro} = useTema() 

const corTexto = temaEscuro ? '#fff' : '#000'

  return (

    <View>
        <Switch style={{alignSelf: 'center'}} 
   value={temaEscuro}
    onValueChange={setTemaEscuro} 
    trackColor={{false: '#ccc', true: '#666'}} 
    thumbColor={temaEscuro ? '#fff' : '#333'}/>

    <Text style={[styles.switch, {color: corTexto}]}>{temaEscuro ? 'Ativado':'Desativado'}</Text>
    </View>
  

    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    switch: {
        fontSize: 18,

    }
})