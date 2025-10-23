import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function ModoEscuroClaro() {

    const [ativo, setAtivo] = useState<boolean>(false) 

    const fundo = ativo ? '#333' : '#f5f5f5'
    const corTexto = ativo ? '#fff' : '#000'

  return (
    <View style={[styles.container, {backgroundColor: fundo}]}>
      <Text style={[styles.title, {color: corTexto}]}>Modo {ativo ? 'Escuro' : 'Claro'}</Text>

      <Switch
        value={ativo}
        onValueChange={setAtivo}
        trackColor={{false: '#ccc', true: '#666'}}
        thumbColor={ativo ? '#fff' : '#333'}
      />
      <Text style={[styles.switch, {color: corTexto}]}>{ativo ? 'Ativado':'Desativado'}</Text>
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