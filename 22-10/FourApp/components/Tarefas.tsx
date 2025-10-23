import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Tarefas() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [novaTarefa, setNovaTarefa] = useState('')

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite uma tarefa'
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />

                <Button
                    title='Adicionar tarefa'
                    onPress={adicionarTarefa}
                />

                <FlatList
                    data={tarefas}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Text style={styles.text}>
                            {index + 1}. {item}
                        </Text>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
    },
    text: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 16,
    }
})
