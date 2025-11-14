import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput, FlatList, Alert, Platform, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Definindo como o app deve reagir quando uma notificação for recebida enquanto o aplicativo está ABERTO.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

type Lembrete = {
  id: string;
  mensagem: string;
  segundos: number;
};

export default function App() {
  const [mensagem, setMensagem] = useState<string>("");
  const [segundos, setSegundos] = useState<string>("");
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  useEffect(() => {
    pedirPermissao();

    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notificação recebida:", notification);
      }
    );

    return () => subscription.remove();
  }, []);

  // Agendar lembrete
  const agendarLembrete = async () => {
    if (!mensagem.trim()) {
      Alert.alert("Erro", "Digite uma mensagem o seu jaguara.");
      return;
    }

    const segundosNum = Number(segundos);
    if (!segundos.trim() || isNaN(segundosNum) || segundosNum <= 0) {
      Alert.alert("Erro", "Digite um número válido o seu jaguara.");
      return;
    }

    try {
      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: "LembreTchê!",
          body: mensagem,
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: segundosNum,
        },
      });

      setLembretes((prev) => [
        ...prev,
        { id: id.toString(), mensagem, segundos: segundosNum },
      ]);

      setMensagem("");
      setSegundos("");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", " Bah meu consagrado Não foi possível agendar os teus LembreTchê.");
    }
  };

  // Cancelar todos os lembretes
  const cancelarTodos = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setLembretes([]);
    Alert.alert("Cancelado", "Bah meu tu removeu teus LembreTchê.");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>LembreTchê</Text>
        <TextInput
          placeholder="Digite seu LembreTchê"
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
        />
        <TextInput
          placeholder="Em quantos segundos?"
          style={styles.input}
          value={segundos}
          onChangeText={setSegundos}
          keyboardType="numeric"
        />
        <Button title="Agendar LembreTchê" onPress={agendarLembrete} color="#D11131" />  
        <View style={{ marginVertical: 10 }}>
          <Button title="Cancelar Todos" onPress={cancelarTodos} color="#dbcd08ff" /> 
        </View>
        <FlatList<Lembrete>
          data={lembretes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.lembreteItem}>
              <Text style={styles.lembreteTexto}>{item.mensagem}</Text>
              <Text style={styles.lembreteTempo}>{item.segundos} s</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={{ marginTop: 20, color: "#155c12ff", fontSize: 20 }}>É us guri da catequesse</Text>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Função de permissão para notificações
async function pedirPermissao(): Promise<void> {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    const { status: novoStatus } = await Notifications.requestPermissionsAsync();

    if (novoStatus !== "granted") {
      Alert.alert("Permissão negada", "O app não poderá enviar notificações.");
      return;
    }
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      sound: "default",
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#006400", 
  },
  input: {
    borderWidth: 2,
    borderColor: "#006400", 
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  lembreteItem: {
    backgroundColor: "#e6e3e3a6", 
    padding: 15,
    borderRadius: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lembreteTexto: {
    fontSize: 16,
    color: "", 
  },
  lembreteTempo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red", 
  },
  
});
