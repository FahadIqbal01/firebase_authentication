import { TextStyle } from "react-native"

export const COLOR_PALETTE = {
    PRIMARY: { Hex: "#6366F1" },
    PRIMARY_LIGHT: { Hex: "#E0E7FF" },
    PRIMARY_DARK: { Hex: "#4F46E5" },
    BACKGROUND: { Hex: "#F8FAFC" },
    SURFACE: { Hex: "#FFFFFF" },
    TEXT_PRIMARY: { Hex: "#0F172A" },
    TEXT_SECONDARY: { Hex: "#64748B" },
    TEXT_TERTIARY: { Hex: "#94A3B8" },
    BORDER: { Hex: "#E2E8F0" },
    BORDER_FOCUS: { Hex: "#6366F1" },
    ERROR: { Hex: "#EF4444" },
    ERROR_LIGHT: { Hex: "#FEE2E2" },
    SUCCESS: { Hex: "#22C55E" },
    SUCCESS_LIGHT: { Hex: "#DCFCE7" },
}

export const TYPOGRAPHY_SCALES = {
    H1: { size: 28, weight: 'bold' as TextStyle['fontWeight'], lineHeight: 36 },
    H2: { size: 22, weight: 'semibold' as TextStyle['fontWeight'], lineHeight: 28 },
    Body: { size: 16, weight: 'regular' as TextStyle['fontWeight'], lineHeight: 24 },
    BodyMedium: { size: 16, weight: 'medium' as TextStyle['fontWeight'], lineHeight: 24 },
    Caption: { size: 14, weight: 'regular' as TextStyle['fontWeight'], lineHeight: 20 },
    CaptionMedium: { size: 14, weight: 'medium' as TextStyle['fontWeight'], lineHeight: 20 },
    Small: { size: 12, weight: 'medium' as TextStyle['fontWeight'], lineHeight: 16 },
}

export const FONT_FAMILY = 'Inter-VariableFont_opsz,wght'

export const SPACING_SCALE = [
    { key: 'xs', value: 4 },
    { key: 'sm', value: 8 },
    { key: 'md', value: 16 },
    { key: 'lg', value: 24 },
    { key: 'xl', value: 32 },
    { key: 'xxl', value: 48 },
]

export const BORDER_RADIUS = {
    xs: { value: 8 },
    md: { value: 12 },
    lg: { value: 16 },
    full: { value: 999 },
}

export const SHADOWS = [
    { platform: 'android', shadow: 3 }
]