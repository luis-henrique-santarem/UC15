import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Usuario {
  nome: string;
  idade: string;
}

const chave_usuario = '@usuario';

export async function salvarUsuario(usuario: Usuario) {
    try {
        await AsyncStorage.setItem(chave_usuario,JSON.stringify(usuario))
    } catch(error) {
        console.log("Bah meu errou em salvar o usuário:",error)
        return null
    }
}
export async function carregarUsuario(): Promise<Usuario | null> {
  try {
    const json = await AsyncStorage.getItem(chave_usuario);
    return json ? JSON.parse(json) : null;
  } catch(error) {
    console.log('Bah meu errou em carregar o usuário:', error);
    return null;
  }
}
export async function limparUsuario() {
  try {
    await AsyncStorage.removeItem(chave_usuario);
  } catch(error) {
    console.log('Bah meu errou em remover o usuário:', error);
  }
}