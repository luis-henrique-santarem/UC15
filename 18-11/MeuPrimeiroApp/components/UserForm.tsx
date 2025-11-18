import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { salvarUsuario, carregarUsuario, limparUsuario, Usuario } from '../storage/userStorage';

export default function UserForm() {
    const [usuario, setUsuario] = useState<Usuario>({ nome: '', idade: '' });

    useEffect(() => {
        const carregar = async () => {
            const dados = await carregarUsuario();
            if (dados) setUsuario(dados);
        };
        carregar();
    }, []);

    const salvar = async () => {
        await salvarUsuario(usuario); 
        console.log("============== Teu nome e tua idade seu jaguara ==============")
        console.log(`nome: ${usuario.nome} `);
        console.log(`idade: ${usuario.idade}`);
        console.log("==============================================================")
        alert('Dados salvos com sucesso!');
    };

    const limpar = async () => {
        await limparUsuario();
        setUsuario({ nome: '', idade: '' });
        alert('Dados apagados!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Qual teu nome Piá:</Text>
            <TextInput
                style={styles.input}
                value={usuario.nome}
                onChangeText={(t) => setUsuario({ ...usuario, nome: t })}
                placeholder="Fale teu nome o jaguara"
            />

            <Text style={styles.label}>Qual tua idade Piá:</Text>
            <TextInput
                style={styles.input}
                value={usuario.idade}
                onChangeText={(t) => setUsuario({ ...usuario, idade: t })}
                placeholder="Fale quantos anos tu tem"
                keyboardType="numeric"
            />

            <Button title="Salvar" onPress={salvar} color="#dbc03aff" />
            <View style={{ marginTop: 10 }} />
            <Button title="Limpar Dados" onPress={limpar} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: '80%' },
    label: { fontSize: 18, marginTop: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#2e642aff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
    },
});