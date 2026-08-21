import React from "react";
import { StyleSheet, Text, StyleProp, TextStyle, View } from "react-native";
import { COLOR_PALETTE } from "../constants/theme";

interface LinkTextProps {
    text: string;
    _styles?: StyleProp<TextStyle>;
    children?: React.ReactNode,
    onPress?: () => void
}

function LinkText({ text, _styles, children, onPress }: LinkTextProps): React.JSX.Element {
    return <View>
        <Text style={[styles.text, _styles]} onPress={onPress}>{text}{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        color: COLOR_PALETTE.PRIMARY.Hex
    }
})

export default LinkText