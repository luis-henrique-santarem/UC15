import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Exemplo2() {
  useEffect(() => {
    console.log("O componente apareceu na tela!");
  }, []); // vai ser chamado uma vez só, quando o componente for montado na tela / aparecer na tela

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>👋 Componente montado!</Text>
    </View>
  );
}