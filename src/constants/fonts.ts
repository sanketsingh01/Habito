/** Font family names matching loaded font assets */
export const fontFamilies = {
  displayRegular: "DMSans_400Regular",
  displayBold: "DMSans_700Bold",
  bodyRegular: "Inter_400Regular",
  bodyMedium: "Inter_500Medium",
  bodySemiBold: "Inter_600SemiBold",
} as const;

/** Map passed to `useFonts()` in the root layout */
export const fontAssets = {
  [fontFamilies.displayRegular]: require("@expo-google-fonts/dm-sans/400Regular/DMSans_400Regular.ttf"),
  [fontFamilies.displayBold]: require("@expo-google-fonts/dm-sans/700Bold/DMSans_700Bold.ttf"),
  [fontFamilies.bodyRegular]: require("@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf"),
  [fontFamilies.bodyMedium]: require("@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf"),
  [fontFamilies.bodySemiBold]: require("@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf"),
} as const;
