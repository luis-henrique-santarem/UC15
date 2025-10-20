import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Perfil from "./Perfil";
import Post from "./Post";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <Perfil
            nome="Carolina Beckham "
            foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPDUjZ7DXkIOtGBuUOeqo-ZECSuuW88SF_Q&s"
            descricao="📸 Fotógrafa apaixonada por capturar momentos únicos                                                                                           
                       ✨ Transformando histórias em imagens inesquecíveis                                                                          
                       🌍 Canoas-RS | Disponível para ensaios e eventos                                                      
                       📩 Contato para bookings e parcerias"
          />
          <Post
            title="Um Casamento Cheio de Amor"
            texto="Ainda emocionada com esse casamento lindo que tive o prazer de fotografar! Cada detalhe, cada olhar, cada sorriso… tudo tão verdadeiro e cheio de amor. Grata por poder transformar momentos assim em memórias eternas. ✨"
            imagem="https://www.souvenirsphotos.com/wp-content/uploads/2019/08/Ensaio-noivos-na-praia-do-Rio-de-Janeiro-com-fotografa-profissional.jpg"
          />
          <Post
            title="15 Anos de Sonhos e Descobertas"
            texto="Foi uma honra registrar esse momento tão especial na vida da Madu: seus 15 anos, uma fase de transição, sonhos e descobertas. Cada clique buscou capturar não só a beleza, mas também a essência e a personalidade dela. Ensaio lindo, cheio de leveza e emoção e memórias que vão durar para sempre! ✨📸"
            imagem="https://alfred.alboompro.com/crop/width/600/height/400/mode/jpeg/quality/70/url/cdn.alboompro.com/5e5829eb68fee500019bc6fe_663001d8f0f5a600014a24ff/original_size/ensaio_madu_15_anos-71.jpg?v=1"
          />
          <Post
            title="O Encanto do Pão de Açúcar"
            texto="O Rio de Janeiro é uma cidade de contrastes e belezas únicas. O Pão de Açúcar, com sua imponência e história, é um dos maiores símbolos dessa cidade maravilhosa. Fotografá-lo é capturar não apenas uma paisagem, mas a essência de um povo e de um lugar que encanta o mundo. Cada clique é uma homenagem a essa maravilha natural que nos inspira todos os dias."
            imagem="https://visitrio.com.br/wp-content/uploads/2025/01/pao-de-acucar.jpg"
          />
          <Post
            title="Beleza na Simplicidade do Cotidiano"
            texto='"Cada clique é uma oportunidade de capturar a essência do momento. Esta imagem reflete a beleza da simplicidade e a magia que reside nos detalhes do cotidiano. A fotografia é a arte de eternizar sentimentos e histórias, e cada foto é uma nova narrativa esperando para ser contada." 📸✨'
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoDBXaUX0jdVeu4ZM8nd4LTYhgxv6O4E6fg&s"
          />
          <Post
            title="Cores da Natureza na Cidade"
            texto='"Adoro quando a natureza colore a cidade! Essas árvores floridas trazem vida e leveza para o cotidiano urbano, criando cenários cheios de charme para serem eternizados. Cada clique é uma celebração da harmonia entre o concreto e o natural." 🌸🚗📸'
            imagem="https://i.pinimg.com/236x/7b/09/6b/7b096b9113535c69fdc30cdc3067af10.jpg"
          />
          <Post
            title="A Alma Japonesa da Liberdade"
            texto='A Liberdade é um pedaço do Japão no coração de São Paulo, onde a tradição oriental se encontra com a energia urbana. Cada rua, cada detalhe, carrega histórias de imigração, cultura e resistência. Fotografar esse bairro é capturar a essência de um lugar que pulsa identidade e diversidade." 🇯🇵🏮📸'
            imagem="https://s2.glbimg.com/6NRI546XAkRoUqar9LbZ4ABxLes=/620x455/e.glbimg.com/og/ed/f/original/2019/03/20/bairro-da-liberdade_reproducao_turistaprofissional.jpg"
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  safeArea: {
    flex: 1,
  },
});
