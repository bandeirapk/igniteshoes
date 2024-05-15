import { StatusBar } from "react-native"

import { NativeBaseProvider } from "native-base"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { THEME } from "./src/theme"

import { Routes } from "./src/routes"
import { CartContextProvider } from "./src/contexts/CartContext"

import { OneSignal } from "react-native-onesignal"

import { Loading } from "./src/components/Loading"

OneSignal.initialize("48266679-5848-4198-a279-422a462dfc36")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  )
}
