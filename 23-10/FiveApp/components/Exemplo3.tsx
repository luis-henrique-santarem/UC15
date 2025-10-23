import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function Exemplo3() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador mudou para:", contador);
  }, [contador]); // a função vai ser chamada apenas quando o contador mudar

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Text onPress={() => setContador(contador + 1)}>adicionar</Text>
    </View>
  );
}