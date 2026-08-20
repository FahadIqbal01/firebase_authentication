import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLOR_PALETTE } from "../constants/theme";

interface SecondaryButtonProps {
    text: string;
    onPress?: () => void;
    loading: boolean
}

function SecondaryButton({ text, onPress, loading }: SecondaryButtonProps): React.JSX.Element {
    return <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading} activeOpacity={0.7}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLOR_PALETTE.SURFACE.Hex,
        borderColor: COLOR_PALETTE.PRIMARY.Hex,
        width: 'auto',
        marginTop: 32,
        justifyContent: 'center'
    },
    text: {
        color: COLOR_PALETTE.PRIMARY.Hex
    }
})

export default SecondaryButton