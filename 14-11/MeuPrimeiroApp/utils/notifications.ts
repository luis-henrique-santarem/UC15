import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,     
    shouldPlaySound: false,    
    shouldSetBadge: false,     
    shouldShowBanner: true,    
    shouldShowList: true       
  })
});

export async function pedirPermissao() {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    const { status: novoStatus } = await Notifications.requestPermissionsAsync();

    if (novoStatus !== "granted") {
      Alert.alert("Permissão negada", "Não foi possível ativar notificações.");
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