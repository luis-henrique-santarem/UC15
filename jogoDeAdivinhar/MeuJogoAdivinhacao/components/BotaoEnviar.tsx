import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void
  titulo: string
  disabled?: boolean
};

export default function BotaoEnviar({ onPress, titulo, disabled }: Props) {
  return (
    <TouchableOpacity style={[styles.botao, disabled && styles.desabilitado]} onPress={onPress} disabled={disabled}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#ffd700",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#ffd700",
    shadowOpacity: 0.8,
    shadowRadius: 10
  },
  texto: {
    color: "#4b0082",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center"
  },
  desabilitado: {
    backgroundColor: "#666"
  },
});
