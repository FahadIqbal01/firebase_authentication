/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { DisplayMetrics, DisplayMetricsAndroid, Image, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { BORDER_RADIUS, COLOR_PALETTE, TYPOGRAPHY_SCALES } from "../constants/theme";
import { ASSETS } from "../constants/assets";

interface InputFieldProps {
    label: string;
    placeholder: string;
    isPassword?: boolean;
    isErrorMessage?: boolean;
}

function InputField({ label, placeholder, isPassword = false, isErrorMessage = false }: InputFieldProps): React.JSX.Element {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(true);

    const dimensions: DisplayMetrics | DisplayMetricsAndroid = useWindowDimensions();

    return <View>
        <Text style={styles.label}>{label}</Text>
        <View>
            <TextInput style={[styles.textInput, { width: dimensions.width * 0.75 }, isFocus && styles.focusState,]}
                placeholder={placeholder}
                placeholderTextColor={COLOR_PALETTE.TEXT_TERTIARY.Hex}
                onFocus={() => setIsFocus(!isFocus)}
                onBlur={() => setIsFocus(!isFocus)}
                secureTextEntry={showPassword}
            />
            <View style={styles.passwordBtnParent}>
                {isPassword && <TouchableOpacity style={styles.passwordBtn} activeOpacity={0.7} onPress={() => setShowPassword(!showPassword)}>
                    <Image source={showPassword ? ASSETS.icons.show : ASSETS.icons.hidden} style={styles.passwordIcon} />
                </TouchableOpacity>}
            </View>
        </View>
        {isErrorMessage && <Text style={styles.helperText}>Error Message</Text>}
    </View>
}

const styles = StyleSheet.create({
    label: {
        fontSize: TYPOGRAPHY_SCALES.CaptionMedium.size,
        fontWeight: TYPOGRAPHY_SCALES.CaptionMedium.weight,
        lineHeight: TYPOGRAPHY_SCALES.CaptionMedium.lineHeight,
        color: COLOR_PALETTE.TEXT_SECONDARY.Hex,
        marginBottom: 8
    },
    textInput: {
        height: 52,
        backgroundColor: COLOR_PALETTE.SURFACE.Hex,
        borderWidth: 1,
        borderColor: COLOR_PALETTE.BORDER.Hex,
        borderRadius: BORDER_RADIUS.md.value,
        padding: 16
    },
    placeholder: {
        color: COLOR_PALETTE.TEXT_TERTIARY.Hex
    },
    focusState: {
        borderColor: COLOR_PALETTE.PRIMARY.Hex,
        borderWidth: 2
    },
    errorState: {
        borderColor: COLOR_PALETTE.ERROR.Hex,
        borderWidth: 2,
    },
    helperText: {
        fontSize: TYPOGRAPHY_SCALES.Small.size,
        fontWeight: TYPOGRAPHY_SCALES.Small.weight,
        lineHeight: TYPOGRAPHY_SCALES.Small.lineHeight,
        marginTop: 4
    },
    passwordBtnParent: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    passwordBtn: {
        marginLeft: 'auto',
        padding: 10
    },
    passwordIcon: {
        width: 20,
        height: 20,
        tintColor: COLOR_PALETTE.TEXT_SECONDARY.Hex,
    }
})

export default InputField