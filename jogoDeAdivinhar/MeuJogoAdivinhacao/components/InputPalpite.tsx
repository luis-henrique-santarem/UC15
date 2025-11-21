import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  valor: string
  onChange: (t: string) => void
};

export default function InputPalpite({ valor, onChange }: Props) {
  return (
    <TextInput value={valor} onChangeText={onChange} placeholder="Seu palpite meu consagrado" keyboardType="numeric" style={styles.input} placeholderTextColor="#ddd"/>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 16,
    borderWidth: 3,
    borderColor: "#ffd700",
    color: "#fff",
    borderRadius: 12,
    marginVertical: 16,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.1)"
  },
});
