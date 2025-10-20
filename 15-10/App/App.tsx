import React from 'react'
import { View, Text, TextInput, Button, Image, ScrollView,  StyleSheet } from 'react-native'

export default function App() {
  return (
    <>  
    
    <ScrollView contentContainerStyle={styles.container}> 
   
      {/* Cabeçalho */}
      <Text style={styles.header}> Bem vindo ao Meu App</Text>

      {/* Imagem central */}
       <Image
        source={{ uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZxYzg1OWRqcm50M2oxcmdvcmc4d243cmtlNjd0ZXV2M3k4OXptaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jcpggDXzJICDVkWY9i/giphy.gif' }}
        style={styles.image}
      />
      

       {/* Formulário simples */}
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome" 
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu email" 
          keyboardType="email-address"
        />

        <View style={styles.buttonContainer}>
          <Button 
            title="Enviar" 
            onPress={() => alert('Formulário enviado!')} 
            color="#4A90E2"
          />
        </View>
      </View>

      {/* Rodapé */}
      <Text style={styles.footer}>
        © 2025 Meu App. Todos os direitos reservados.
      </Text>
   </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fffefeff',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  form: {
    width: '100%',
    backgroundColor: '#f7f3f3ff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#333333ff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
  footer: {
    marginTop: 40,
    color: '#888',
  },
});
