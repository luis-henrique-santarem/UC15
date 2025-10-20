import React from "react";
import { View, Text, Image, StyleSheet, Button} from "react-native";

export default function Post(props: { texto: string; imagem: string; title: string }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.imagem }} style={styles.imagem} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.texto}>{props.texto}</Text>

      <View style={styles.botoes}>
        <Button
          title="Curtir"
          onPress={() => alert("Você curtiu o post!")}
          color="#b4960fff"
        />
        <Button
          title="Comentar"
          onPress={() => alert("Comentar...")}
          color="#b4960fff"
        />
        <Button
          title="Compartilhar"
          onPress={() => alert("Compartilhado!")}
          color="#b4960fff"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f1eeeede",
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  imagem: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    marginBottom: 13,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    
  }
});
