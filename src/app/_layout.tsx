import { fontAssets } from "@/constants/fonts";
import { colors } from "@/constants/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";

import { migrateDbIfNeeded } from "@/db/database";
import { SQLiteProvider } from "expo-sqlite";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.background} />
      <SQLiteProvider databaseName="habito.db" onInit={migrateDbIfNeeded}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="habit/createHabit" />
        </Stack>
      </SQLiteProvider>
    </>
  );
}
