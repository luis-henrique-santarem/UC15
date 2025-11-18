import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definindo a interface para o tipo de tema
interface Tema {
  modo: 'claro' | 'escuro';
}

export default function App() {
  const [tema, setTema] = useState<Tema>({ modo: 'claro' });

  // Carregar tema do AsyncStorage ao iniciar
  useEffect(() => {
    const carregarTema = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@tema');
        if (jsonValue) setTema(JSON.parse(jsonValue));
      } catch (error) {
        console.log('Erro ao carregar tema:', error);
      }
    };
    carregarTema();
  }, []);

  // Alternar entre tema claro e escuro
  const alternarTema = async () => {
    try {
      const novoTema: Tema = { modo: tema.modo === 'claro' ? 'escuro' : 'claro' };
      setTema(novoTema);
      await AsyncStorage.setItem('@tema', JSON.stringify(novoTema));
    } catch (error) {
      console.log('Erro ao salvar tema:', error);
    }
  };

  return (
    <View style={[styles.container, tema.modo === 'claro' ? styles.claro : styles.escuro]}>
      <Text style={tema.modo === 'claro' ? styles.textoClaro : styles.textoEscuro}>
        Tema atual: {tema.modo}
      </Text>
      <Button title="Alternar Tema" onPress={alternarTema} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  claro: {
    backgroundColor: '#fff',
  },
  escuro: {
    backgroundColor: '#333',
  },
  textoClaro: {
    color: '#000',
    marginBottom: 20,
  },
  textoEscuro: {
    color: '#fff',
    marginBottom: 20,
  },
});