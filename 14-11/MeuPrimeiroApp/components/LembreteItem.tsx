import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Lembrete } from "../screens/HomeScreen";

type Props = {
  lembrete: Lembrete;
};

export function LembreteItem({ lembrete }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>{lembrete.mensagem}</Text>
      <Text style={styles.tempo}>{lembrete.segundos}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e6e3e3a6",
    padding: 15,
    borderRadius: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    fontSize: 16,
  },
  tempo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});