import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Post(props: { texto: string; imagem: string; title: string;}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.imagem }} style={styles.imagem} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.texto}>{props.texto}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Você curtiu o post!")}
        >
          <MaterialIcons name="favorite" size={22} color="#b4960f" />
          <Text style={styles.botaoTexto}>Curtir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Comentar...")}
        >
          <MaterialIcons name="comment" size={22} color="#b4960f" />
          <Text style={styles.botaoTexto}>Comentar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Compartilhado!")}
        >
          <MaterialIcons name="share" size={22} color="#b4960f" />
          <Text style={styles.botaoTexto}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 16,
    padding: 15,
  },
  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#927d1dff",
  },
  texto: {
    fontSize: 16,
    color: "#444",
    marginBottom: 14,
    lineHeight: 24,
    textAlign: "justify",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  botaoTexto: {
    color: "#a78e1fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
