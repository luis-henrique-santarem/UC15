import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <Image
      source={{ uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWM2dWJhd2d1enRtZDJuaG0xODVqbHozbnJ6dXRoNHpkNjR1NGkxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jcpggDXzJICDVkWY9i/giphy.gif' }} 
      style={styles.img}
      ></Image>
      <Text style={styles.text}> Rebolado</Text>

      <Image
      source={require('./assets/pato-bonito-em-branco_1308-41058.jpg')} 
      style={styles.img}
      ></Image>

      <Button
        title="Clique aqui" 
  onPress={() => alert('que rebolado')} 
  color="#007AFF"
      ></Button>

      <TouchableOpacity
  onPress={() => alert('Pressionado!')}
  style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }}
>
  <Text style={{ color: '#fff' }}>Botão Customizado</Text>
</TouchableOpacity>

    <TextInput
     placeholder="Digite seu nome"
  style={{ borderWidth: 1, padding: 10, width: 200 }}
  onChangeText={(texto) => console.log(texto)}
    >
    </TextInput>


    <ScrollView style={{ margin: 20, height: 50, backgroundColor: "red" }}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  <Text>Item 4</Text>
  <Text>Item 5</Text>
  <Text>Item 6</Text>
  <Text>Item 7</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
<Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
  <Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>
<Text>Item 4</Text>

  {/* ...outros itens */}
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'orange',
    fontSize: 33,
  },
  img: {
    width: 100,
    height: 100
  }
});
