 import React, { useRef, useState } from 'react';

// A) Acessar elementos nativos
 // import { TextInput, Button, View } from 'react-native';

// export default function App() {
//   // Criamos uma referência para o TextInput
//   const inputRef = useRef<TextInput>(null); // inicialmente a ref aponta para null

//   return (
//     <View style={{ padding: 16 }}>
//       {/* Associamos a ref ao TextInput */}
//       <TextInput
//         ref={inputRef}
//         placeholder="Digite algo"
//         style={{ borderWidth: 1, borderColor: '#000', padding: 8 }}
//       />
//       <Button
//         title="Focar no input"
//         onPress={() => {
//           // Chamamos o método focus() do TextInput usando a ref
//           inputRef.current?.focus(); // ? verifica se current existe antes de chamar focus()
//         }}
//       />
//     </View>
//   );
// }import React, { useRef, useState } from 'react';


// B) Guardar valores sem re-render

// import { Button, Text, View } from 'react-native';

// export default function App() {
//   const renderCount = useRef(0); // contador de renders que não dispara re-render
//   const [count, setCount] = useState(0); // contador normal que dispara render

//   renderCount.current += 1; // incrementa renderCount a cada render do componente

//   return (
//     <View style={{ padding: 16 }}>
//       <Text>Contador: {count}</Text>
//       <Text>Renderizações: {renderCount.current}</Text>
//       <Button title="Adicionar" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// }


// 4. Exemplo Prático: Scroll automático
import { ScrollView, Text, Button, View } from 'react-native';

export default function App() {
  const scrollRef = useRef<ScrollView>(null); // referência para o ScrollView

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Botão para rolar até o final */}
      <Button
        title="Ir para o final"
        onPress={() => {
          // Chamamos o método scrollToEnd() do ScrollView usando a ref
          scrollRef.current?.scrollToEnd({ animated: true }); // ? verifica se current existe
        }}
      />
      <ScrollView
        ref={scrollRef} // ligamos a ref ao ScrollView
        style={{ marginTop: 16, borderWidth: 1, height: 200 }}
      >
        {/* Criamos 30 itens para demonstrar o scroll */}
        {Array.from({ length: 30 }, (_, i) => (
          // _ representa o valor do elemento (não usado aqui)
          // i é o índice do elemento
          <Text key={i} style={{ padding: 8 }}>
            Item {i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}