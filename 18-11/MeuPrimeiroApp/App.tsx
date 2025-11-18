import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserForm from './components/UserForm';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastre teu nome e tua idade tchê</Text>
      
     <UserForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: "#E7DCC3"
  },
  titulo: {
    fontSize: 23,
    marginBottom: 60,
    fontWeight: 'semibold',
    color: "green"
  },
});