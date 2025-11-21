import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  texto: string
}

export default function Mensagem({ texto }: Props) {
  return <Text style={styles.msg}>{texto}</Text>
}

const styles = StyleSheet.create({
  msg: {
    fontSize: 22,
    color: "#ffd700",
    textAlign: "center",
    marginBottom: 19,
    paddingHorizontal: 16,
    fontWeight: "600"
  }
});
