import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLOR_PALETTE, TYPOGRAPHY_SCALES } from "../constants/theme";
import { ASSETS } from "../constants/assets";

interface ToastProps {
    message: string
}

function Toast({ message }: ToastProps): React.JSX.Element {
    return <View style={styles.container}>
        <Image source={ASSETS.icons.alertCircle} style={styles.icon} />
        <Text style={styles.text}>{message}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        backgroundColor: COLOR_PALETTE.ERROR.Hex,
        flexDirection: 'row',
        padding: 8
    },
    text: {
        color: 'white',
        fontSize: TYPOGRAPHY_SCALES.BodyMedium.size,
        fontWeight: TYPOGRAPHY_SCALES.BodyMedium.weight,
        lineHeight: TYPOGRAPHY_SCALES.BodyMedium.lineHeight,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white'
    }
})

export default Toast