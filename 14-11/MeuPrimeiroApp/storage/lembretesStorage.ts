import AsyncStorage from "@react-native-async-storage/async-storage";
import { Lembrete } from "../screens/HomeScreen";

const chave = "@lembretes";

export async function salvarLembretes(lista: Lembrete[]) {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(lista));
  } catch (e) {
    console.log("Erro ao salvar:", e);
  }
}

export async function carregarLembretes(): Promise<Lembrete[] | null> {
  try {
    const json = await AsyncStorage.getItem(chave);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.log("Erro ao carregar:", e);
    return null;
  }
}

export async function limparLembretesStorage() {
  try {
    await AsyncStorage.removeItem(chave);
  } catch (e) {
    console.log("Erro ao limpar storage:", e);
  }
}