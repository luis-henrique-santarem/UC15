import React, { useRef, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InputPalpite from "./components/InputPalpite";
import BotaoEnviar from "./components/BotaoEnviar";
import Mensagem from "./components/Mensagem";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const numeroSecreto = useRef(Math.floor(Math.random() * 100) + 1)
  const tentativas = useRef(0)
  const [palpite, setPalpite] = useState("")
  const [mensagem, setMensagem] = useState("Digite um número entre 1 e 100 meu consagrado")
  const [jogoEncerrado, setJogoEncerrado] = useState(false)

  const verificarPalpite = () => {
    if (jogoEncerrado) return
    const numero = Number(palpite)
    if (isNaN(numero) || numero < 1 || numero > 100) {
      setMensagem("Digite um número válido entre 1 e 100 parece ate loco tentando fazer merda no meu jogo!")
      setPalpite("")
      return
    }
    tentativas.current += 1
    if (numero === numeroSecreto.current) {
      setMensagem(`Acertou! O número piá ${numeroSecreto.current}.`)
      setJogoEncerrado(true)
      return
    }
    if (tentativas.current >= 10) {
      setMensagem(`Você perdeu! O número era esse piá ${numeroSecreto.current}.`)
      setJogoEncerrado(true)
      return
    }
    setMensagem(numero < numeroSecreto.current? "O número é MAIOR meu guri.": "O número é MENOR piá.")
    setPalpite("")
  };

  const reiniciar = () => {
    numeroSecreto.current = Math.floor(Math.random() * 100) + 1
    tentativas.current = 0
    setMensagem("Novo jogo iniciado! Boa sorte meu guri!")
    setPalpite("")
    setJogoEncerrado(false)
  };

  return (
    <SafeAreaProvider>
      <LinearGradient colors={["#4b0082", "#2d0052"]} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
          <Mensagem texto={mensagem} />
          <InputPalpite valor={palpite} onChange={setPalpite} />
          <BotaoEnviar onPress={verificarPalpite} titulo={jogoEncerrado ? "Jogo encerrado" : "Enviar Palpite"} disabled={jogoEncerrado}/>
          {jogoEncerrado && (
            <BotaoEnviar titulo="Reiniciar Jogo meu galo" onPress={reiniciar} />
          )}
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 40
  }
});
