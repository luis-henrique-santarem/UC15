import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaProvider>
      {/* Garante qque os componentes vão ficar dentro de uma área segura */}
        <SafeAreaView style={styles.container}>
      {/* 
        Imagem importada da web
      */}
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxUj4Y4ZewhmA8K6gZHbNrDnZLipMk9XHWg&s'}} style={{width:250, height:100}} ></Image>
       <Text style={styles.text}>Luis Henrique Pedroso Santarem</Text>
      <Text style={styles.subtitle}>Cursando Desenvolvimento de sistemas no Senac</Text>
      {/*
        Imagem importada localmente
      */}
     <Image source={ require('./assets/senacsaoleo.png')} style={{width:420, height:350}} ></Image>
      <Button title='Clique aqui' onPress={() => alert('você esta me devendo')}></Button>
      <TouchableOpacity onPress={() => alert('Pressionado!')} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }} > <Text>Clique</Text> </TouchableOpacity>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#cf820dff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
    color: '#f19102ff',
    marginTop: 1,
  },
});
