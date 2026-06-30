import type { TextStyle, ViewStyle } from "react-native";

import { fontFamilies } from "@/constants/fonts";

/** Organic Habit Tracker — warm, approachable design system */
export const brand = {
  name: "Organic Habit Tracker",
} as const;

/** Material-style color tokens */
export const colors = {
  surface: "#fff8f6",
  surfaceDim: "#edd5cb",
  surfaceBright: "#fff8f6",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#fff1eb",
  surfaceContainer: "#ffeae0",
  surfaceContainerHigh: "#fce3d8",
  surfaceContainerHighest: "#f6ded3",
  onSurface: "#251912",
  onSurfaceVariant: "#594236",
  inverseSurface: "#3c2d26",
  inverseOnSurface: "#ffede6",
  outline: "#8c7164",
  outlineVariant: "#e0c0b1",
  surfaceTint: "#9e4300",
  primary: "#9e4300",
  onPrimary: "#ffffff",
  primaryContainer: "#ff7518",
  onPrimaryContainer: "#5c2400",
  inversePrimary: "#ffb691",
  secondary: "#56642b",
  onSecondary: "#ffffff",
  secondaryContainer: "#d6e7a1",
  onSecondaryContainer: "#5a682f",
  tertiary: "#77574d",
  onTertiary: "#ffffff",
  tertiaryContainer: "#bb958a",
  onTertiaryContainer: "#492e26",
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#93000a",
  primaryFixed: "#ffdbcb",
  primaryFixedDim: "#ffb691",
  onPrimaryFixed: "#341100",
  onPrimaryFixedVariant: "#783100",
  secondaryFixed: "#d9eaa3",
  secondaryFixedDim: "#bdce89",
  onSecondaryFixed: "#161f00",
  onSecondaryFixedVariant: "#3e4c16",
  tertiaryFixed: "#ffdbd0",
  tertiaryFixedDim: "#e7bdb1",
  onTertiaryFixed: "#2c160e",
  onTertiaryFixedVariant: "#5d4037",
  background: "#fff8f6",
  onBackground: "#251912",
  surfaceVariant: "#f6ded3",
} as const;

/** Semantic aliases for common UI patterns */
export const semanticColors = {
  /** Vibrant orange — primary actions, success, progress */
  actionPrimary: colors.primary,
  /** Olive green — secondary actions, calm category accent */
  actionSecondary: colors.secondary,
  /** Earthy brown — tertiary / grounded accent */
  actionTertiary: colors.tertiary,
  /** Soft cream app background */
  appBackground: colors.background,
  /** Pure white card surfaces */
  cardBackground: colors.surfaceContainerLowest,
  /** Subtle card border for data-heavy cards */
  cardBorder: "#efe9e4",
  /** Warm tinted shadow color (dark brown @ ~5%) */
  shadowTint: "rgba(60, 45, 38, 0.05)",
  /** Input focus ring */
  inputFocus: colors.primary,
  /** Ghost button text */
  ghostText: colors.onSurfaceVariant,
} as const;

export { fontFamilies } from "@/constants/fonts";

/** Typography scale — use with `style={[typography.bodyMd, { color: colors.onSurface }]}` */
export const typography = {
  displayLg: {
    fontFamily: fontFamilies.displayBold,
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: -0.68,
  } satisfies TextStyle,
  headlineMd: {
    fontFamily: fontFamilies.displayBold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.24,
  } satisfies TextStyle,
  headlineMdMobile: {
    fontFamily: fontFamilies.displayBold,
    fontSize: 20,
    lineHeight: 28,
  } satisfies TextStyle,
  titleSm: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  bodyMd: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  labelSm: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.13,
  } satisfies TextStyle,
} as const;

/** 8px baseline spacing scale */
export const spacing = {
  /** Base unit — 8px */
  base: 8,
  /** Outer container padding (mobile) — 20px */
  containerPadding: 20,
  /** Gap between cards — 16px */
  cardGap: 16,
  /** Vertical separation between sections — 32px */
  sectionMargin: 32,
  /** Internal card padding — 16px */
  innerPadding: 16,
  /** Mobile gutter — 16px */
  gutter: 16,
  /** Section spacing (3× base) — 24px */
  sectionGap: 24,
} as const;

/** Pill-forward corner radii (rem → px at 16px root) */
export const borderRadius = {
  sm: 2,
  default: 16,
  md: 24,
  lg: 32,
  xl: 48,
  full: 9999,
  /** Standard cards — 24–32px */
  card: 24,
  /** Selection chips / indicators */
  chip: 12,
} as const;

/** Layout constraints */
export const layout = {
  maxWidth: 1200,
  columns: 12,
} as const;

/** Ambient, warm-tinted shadows — avoid pure black */
export const shadows = {
  /** Floating white cards: 0 4px 20px rgba(0,0,0,0.04) */
  card: {
    shadowColor: "#3c2d26",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
  } satisfies ViewStyle,
  /** FAB / active interactive elements */
  elevated: {
    shadowColor: "#3c2d26",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  } satisfies ViewStyle,
} as const;

/** Pre-composed component tokens */
export const components = {
  button: {
    primary: {
      backgroundColor: colors.primary,
      color: colors.onPrimary,
      borderRadius: borderRadius.full,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.onSecondary,
      borderRadius: borderRadius.full,
    },
    ghost: {
      backgroundColor: "transparent",
      color: semanticColors.ghostText,
      borderRadius: borderRadius.full,
    },
  },
  card: {
    default: {
      backgroundColor: semanticColors.cardBackground,
      borderRadius: borderRadius.card,
      ...shadows.card,
    },
    bordered: {
      backgroundColor: semanticColors.cardBackground,
      borderRadius: borderRadius.card,
      borderWidth: 1,
      borderColor: semanticColors.cardBorder,
    },
  },
  input: {
    default: {
      backgroundColor: colors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.innerPadding,
      paddingVertical: spacing.base,
    },
    focused: {
      borderWidth: 2,
      borderColor: semanticColors.inputFocus,
    },
  },
  chip: {
    default: {
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.innerPadding,
      paddingVertical: spacing.base,
    },
    active: {
      backgroundColor: colors.primary,
      color: colors.onPrimary,
    },
    inactive: {
      backgroundColor: colors.surfaceContainer,
      color: colors.onSurface,
    },
  },
  progress: {
    trackColor: colors.surfaceContainerHigh,
    fillColor: colors.primary,
    height: 8,
    borderRadius: borderRadius.full,
  },
} as const;

/** Full theme object — spread or pass to context/providers */
export const theme = {
  brand,
  colors,
  semanticColors,
  fontFamilies,
  typography,
  spacing,
  borderRadius,
  layout,
  shadows,
  components,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography;
