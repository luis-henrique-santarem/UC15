import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Perfil(props: { nome: string; foto: string; descricao: string }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.foto }} style={styles.foto} />
      <Text style={styles.nome}>{props.nome}</Text>
      <Text>{props.descricao}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e0d6b8bd",
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
  },
 
});
