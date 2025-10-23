import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Exemplo1 from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';
import Exemplo3 from './components/Exemplo3';
import Exemplo4 from './components/Exemplo4';
import Exemplo5 from './components/Exemplo5';
import Exemplo6 from './components/Exemplo6';

import { useState } from 'react';

export default function App() {

  // const [visivel, setVisivel] = useState<boolean>(true)

  return (
    <View style={styles.container}>

      {/* { visivel ? null : <Exemplo4/>}
      <Button
        title=''
        onPress={() => setVisivel(!visivel)}
      >
      </Button>*/}
      
        <Exemplo6/>

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
