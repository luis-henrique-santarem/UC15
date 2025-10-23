import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/contator'
import Esconder from './components/Esconder';
import Saudacao from './components/Saudacao';
import ModoEscuroClaro from './components/ModoEscuroClaro';
import Tarefas from './components/Tarefas';

export default function App() {
  return (
   <Tarefas/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
