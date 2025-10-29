import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,  useState,  useContext,  type ReactNode,} from "react";


interface ITema {
  temaEscuro: boolean; // indica se o tema está escuro (true) ou claro (false)
  setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>; // função para mudar o tema
}

// Criar o contexto
// Aqui estamos fazendo a criação do contexto em si — o “objeto global” que vai guardar e compartilhar informações (no caso, o estado do tema) entre os componentes da aplicação React.
// Inicialmente, o valor inicial do contexto é "undefined"
const TemaContext = createContext<ITema | undefined>(undefined);

// Criar a função auxiliar (hook personalizado)
// useContext(UsuarioContext) serve para pegar o valor atual de um contexto que foi criado com createContext
// Ou seja, ele permite acessar o “objeto global” (contexto) que criamos ali em sem precisar passar props manualmente entre vários componentes.
 export const useTema = (): ITema => {
    const contexto = useContext(TemaContext)
    if (!contexto) {
        throw new Error("useTema deve ser usado dentro de um TemaProvider")
    }
    return contexto
}


export const TemaProvider = (props: { children: ReactNode }) => {
 const [temaEscuro, setTemaEscuro] = useState(false); 

  return (
    <TemaContext.Provider value={{ temaEscuro, setTemaEscuro }}>
      {props.children}
    </TemaContext.Provider>
  );
}






