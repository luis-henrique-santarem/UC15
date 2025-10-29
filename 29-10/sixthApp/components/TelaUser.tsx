// =====================================
// ARQUIVO: src/components/TelaUsuario.tsx
// =====================================

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useUser } from "../context/UserContext";

export const TelaUsuario = () => {
  const { user, setUsuario } = useUser();

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.texto}>Olá, {user.nome}!</Text>
      ) : (
        <Text style={styles.texto}>Nenhum usuário logado</Text>
      )}

      <Button title="Login como João" onPress={() => setUsuario({ nome: "João" })} />
      <View style={{ height: 10 }} />
      <Button title="Logout" color="red" onPress={() => setUsuario(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
});