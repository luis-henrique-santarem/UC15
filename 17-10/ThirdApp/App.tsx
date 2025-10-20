import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Saudacao from './Saudacao';
import SaudacaoNome from './SaudacaoNome';
import Botao from './Botao';
import Perfil from './Perfil';

export default function App() {
  return (
    <View style={styles.container}>
     <Saudacao/>
     <SaudacaoNome nome="maria"/>
     <Botao title='Clique' aoPressionar={() => alert('Você clicou no botão')}/>
       <Botao title='Não Clique' aoPressionar={() => alert('Você não deveria ter clicado')}/>
        <Perfil nome='Luis' idade={20}/>
    </View>
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
