import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput, FlatList, Alert, StyleSheet,} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { pedirPermissao } from "../utils/notifications";
import { carregarLembretes,salvarLembretes, limparLembretesStorage,} from "../storage/lembretesStorage";
import { LembreteItem } from "../components/LembreteItem";
import * as Notifications from "expo-notifications";

export type Lembrete = {
    id: string;
    mensagem: string;
    segundos: number;
};

export default function HomeScreen() {
    const [mensagem, setMensagem] = useState("");
    const [segundos, setSegundos] = useState("");
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);

    useEffect(() => {
        pedirPermissao();
        carregar();
    }, []);

    const carregar = async () => {
        const dados = await carregarLembretes();
        if (dados) setLembretes(dados);
    };

    const agendarLembrete = async () => {
        if (!mensagem.trim()) {
            Alert.alert("Erro", "Digite uma mensagem seu jaguara.");
            return;
        }

        const segundosNum = Number(segundos);

        if (!segundos.trim() || isNaN(segundosNum) || segundosNum <= 0) {
            Alert.alert("Erro", "Digite um número válido seu jaguara.");
            return;
        }

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

        const novo = [...lembretes, { id, mensagem, segundos: segundosNum }];
        setLembretes(novo);
        salvarLembretes(novo);

        setMensagem("");
        setSegundos("");
    };

    const cancelarTodos = async () => {
        await Notifications.cancelAllScheduledNotificationsAsync();
        await limparLembretesStorage();
        setLembretes([]);
        Alert.alert("Cancelado", "Bah meu apagou tudo.");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>LembreTchê</Text>
                <TextInput placeholder="Digite seu LembreTchê" style={styles.input} value={mensagem} onChangeText={setMensagem}/>
                <TextInput placeholder="Em quantos segundos?" style={styles.input} value={segundos} onChangeText={setSegundos} keyboardType="numeric"/>
                <Button title="Agendar LembreTchê" onPress={agendarLembrete} color="#D11131" />
                <View style={{ marginVertical: 10 }}>
                    <Button title="Cancelar Todos" onPress={cancelarTodos} color="#dbcd08ff" />
                </View>
                <FlatList
                    data={lembretes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <LembreteItem lembrete={item} />}
                    ListEmptyComponent={() => (
                        <Text style={{ marginTop: 20, color: "#155c12ff", fontSize: 20 }}>É us guri da catequese</Text>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
    title: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
        color: "#006400",
    },
    input: {
        borderWidth: 2,
        borderColor: "#006400",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
});