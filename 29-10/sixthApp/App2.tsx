import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// 1️⃣ Criar o contexto
// Aqui estamos fazendo a criação do contexto em si — o “objeto global” que vai guardar e compartilhar informações (no caso, o estado do tema) entre os componentes da aplicação React.
// Inicialmente, o valor inicial do contexto é "Visitante"
const UsuarioContext = createContext("Visitante");

// 2️⃣ Criar a função auxiliar (hook personalizado)
// useContext(UsuarioContext) serve para pegar o valor atual de um contexto que foi criado com createContext
// Ou seja, ele permite acessar o “objeto global” (contexto) que criamos ali em sem precisar passar props manualmente entre vários componentes.
function useUsuario() {
  return useContext(UsuarioContext);
}

// Componente que mostra o nome
function MostrarUsuario() {
  const nome = useUsuario(); // Pega o nome direto do contexto
  return <Text>Olá, {nome}!</Text>;
}

// Componente intermediário que só repassa a prop
function Painel() {
  return <MostrarUsuario />;
}

export default function App() {
  const [nome, setNome] = useState("");

  return (
    // Provider (fornecedor dos dados)
    // Ele "envolve" a aplicação e permite que todos os filhos
    // acessem o tema sem precisar de props
    // Tudo que você colocar no value será disponível para todos os componentes “filhos” do Provider
    <View style={styles.container}>
      <TextInput
       
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <UsuarioContext.Provider value={nome}>
        <Painel />
      </UsuarioContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});