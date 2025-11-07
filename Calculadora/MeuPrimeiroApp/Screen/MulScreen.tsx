import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,} from "react-native";
import { MulScreenProps} from "../Interface/Interfaces";

export default function MulScreen({}: MulScreenProps) {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    setResultado(num1 * num2);
  };

  return (
<View style={styles.container}>
  <Text style={styles.titulo}>Calculadora de Multiplicação</Text>
  <TextInput style={styles.input} placeholder="Digite o primeiro número" placeholderTextColor="#999" keyboardType="numeric" value={n1} onChangeText={setN1}/>
  <TextInput style={styles.input} placeholder="Digite o segundo número" placeholderTextColor="#999" keyboardType="numeric" value={n2} onChangeText={setN2}/>
  <TouchableOpacity style={styles.botao} onPress={calcular}>
     <Text style={styles.textoBotao}>Calcular</Text>
  </TouchableOpacity>
  {resultado !== null && (
    <View style={styles.caixaResultado}>
       <Text style={styles.resultadoTitulo}>Resultado</Text>
       <Text style={styles.resultadoValor}>{resultado}</Text>
    </View>
   )}
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
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff7a00",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    color: "#333",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#ff7a00",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  caixaResultado: {
    marginTop: 35,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ff7a00",
  },
  resultadoTitulo: {
    color: "#555",
    fontSize: 16,
  },
  resultadoValor: {
    color: "#ff7a00",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 5,
  },
});
