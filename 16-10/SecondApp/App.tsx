import React from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGJtZzBpNTIxOTJ3cnZ6MW1ob21wNmJtdDRsdmhkYnlzMWF6Y2kycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6U0NFslqznWVED6yH8/giphy.gif",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Cadastro</Text>
          <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" />
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
          <View style={styles.buttonContainer}>
          <Button title="Enviar" onPress={() => alert("Bem-vindo ao gigante da beira-rio!")} color="#b4960fff" />
          </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#a73030ff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#ffffffff",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: "#ffffffff",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#ffffffff",
  },
  buttonContainer: {
    marginTop: 10,
  },
});
