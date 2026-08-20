import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BORDER_RADIUS, COLOR_PALETTE, TYPOGRAPHY_SCALES } from "../constants/theme";

interface PrimaryButtonProps {
    text: string;
    onPress?: () => void;
    loading: boolean
}

function PrimaryButton({ text, onPress, loading }: PrimaryButtonProps) {
    return <TouchableOpacity style={[styles.button, loading && styles.diabledState]} disabled={loading} onPress={onPress}>
        {loading ?
            <ActivityIndicator color={'white'} />
            : <Text style={[styles.text, loading && styles.textDisabledState]}>{text}</Text>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: 'auto',
        height: 52,
        backgroundColor: COLOR_PALETTE.PRIMARY.Hex,
        borderRadius: BORDER_RADIUS.md.value,
        marginHorizontal: 24,
        top: 32,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: TYPOGRAPHY_SCALES.BodyMedium.size,
        fontWeight: TYPOGRAPHY_SCALES.BodyMedium.weight,
        lineHeight: TYPOGRAPHY_SCALES.BodyMedium.lineHeight,
        textAlign: 'center'
    },
    diabledState: {
        backgroundColor: COLOR_PALETTE.BORDER.Hex,
    },
    textDisabledState: {
        color: COLOR_PALETTE.TEXT_TERTIARY.Hex
    }
})

export default PrimaryButton;