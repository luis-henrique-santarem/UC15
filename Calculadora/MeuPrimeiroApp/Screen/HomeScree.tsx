import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { HomeScreenProps } from "../Interface/Interfaces";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://images.vexels.com/media/users/3/205996/isolated/preview/81d3f60bca6d3b2cbef6ba1ff1e0b4f7-desenho-de-calculadora-fofo.png",}} style={styles.logo}/>
      <Text style={styles.titulo}>Bem-vindo à Calculadora</Text>
      <Text style={styles.subtitulo}> Escolha uma das operações abaixo para começar!</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Soma")}>
        <Text style={styles.textoBotao}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: 90,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff7a00",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    width: "80%",
  },
  botao: {
    backgroundColor: "#ff7a00",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
    elevation: 4,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
