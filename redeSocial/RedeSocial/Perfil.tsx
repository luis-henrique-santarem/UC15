import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Perfil(props: { nome: string; foto: string; descricao: string;}) {
  return (
    <View style={styles.container}>
      <View style={styles.fotoContainer}>
        <Image source={{ uri: props.foto }} style={styles.foto} />
      </View>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  fotoContainer: {
    borderWidth: 2,
    borderColor: "#bd0dbdff",
    borderRadius: 90,
    padding: 3,
    marginBottom: 7,
  },
  foto: {
    width: 130,
    height: 130,
    borderRadius: 61,
  },
  nome: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3a3a3a",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    lineHeight: 22,
  },
});
